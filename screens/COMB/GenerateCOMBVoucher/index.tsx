import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View, Text, FlatList, TextInput, TouchableOpacity,
  StyleSheet, ActivityIndicator, Alert, Pressable
} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

import {
  listSokoAds,
  listMarketConsumptions,
  listAveragePrices,
  getCombContract,
} from '../../../src/graphql/queries';

import {
  createCombContractVoucher,
  createMessages,
  sendNotification,
  updateCombContract,
} from '../../../src/graphql/mutations';

/* -------------------- Types -------------------- */

type SokoItem = {
  id: string;
  sokoname: string;
  itemBrand: string;
  itemSpecifications?: string;
  itemUnit: string;
  sokoprice: number | string;
  sokolnprcntg?: number | string;
  sokokntct: string;
};

type PriceAlert = {
  avgItemPrice: number;
  itemDeviation: number;
  allowedMargin: number;
  consumptionMarginStatus: string;
  priceFlag: string;
  avgCategoryPrice: number;
  categoryDeviation: number;
  generalPriceDev: number;
};

/* -------------------- Item Card -------------------- */

const ItemCard = ({
  item,
  quantities,
  setQuantities,
  getPriceAlert,
  handleAddToVoucher,
}: {
  item: SokoItem;
  quantities: Record<string, number>;
  setQuantities: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  getPriceAlert: (item: SokoItem) => Promise<PriceAlert>;
  handleAddToVoucher: (item: SokoItem, alert: PriceAlert) => void;
}) => {
  const [alert, setAlert] = useState<PriceAlert | null>(null);
  const [loadingAlert, setLoadingAlert] = useState(false);

  const qty = quantities[item.id] || 1;
  const priceNum = Number(item.sokoprice) || 0;

  const runDeviationCheck = async () => {
    if (loadingAlert) return;
    setLoadingAlert(true);
    try {
      const res = await getPriceAlert(item);
      setAlert(res);
    } catch {
      Alert.alert('Error', 'Could not calculate deviations.');
    } finally {
      setLoadingAlert(false);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={{ fontWeight: 'bold' }}>
        {item.sokoname} ({item.itemBrand})
      </Text>
      <Text>Unit: {item.itemUnit}</Text>
      <Text>Item Price: {priceNum}</Text>

      {loadingAlert ? (
        <ActivityIndicator style={{ marginVertical: 6 }} />
      ) : alert ? (
        <>
          <Text>Seller Avg: {alert.avgItemPrice.toFixed(2)}</Text>
          <Text>Seller Dev: {alert.itemDeviation.toFixed(2)}%</Text>
          <Text>Market Avg: {alert.avgCategoryPrice.toFixed(2)}</Text>
          <Text>Market Dev: {alert.categoryDeviation.toFixed(2)}%</Text>
          <Text>Status: {alert.consumptionMarginStatus}</Text>
          <Text>Flag: {alert.priceFlag}</Text>
          <Text
            style={{
              color:
                Math.abs(alert.generalPriceDev) >
                Number(item.sokolnprcntg ?? 15)
                  ? '#f44336'
                  : '#4caf50',
            }}
          >
            Other Market Dev: {alert.generalPriceDev.toFixed(2)}%
          </Text>
        </>
      ) : (
        <TouchableOpacity
          onPress={runDeviationCheck}
          style={[styles.qtyBtn, { marginVertical: 6 }]}
        >
          <Text>Check Deviations</Text>
        </TouchableOpacity>
      )}

      <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() =>
            setQuantities(q => ({ ...q, [item.id]: Math.max(1, qty - 1) }))
          }
          style={styles.qtyBtn}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={{ marginHorizontal: 8 }}>{qty}</Text>

        <TouchableOpacity
          onPress={() => setQuantities(q => ({ ...q, [item.id]: qty + 1 }))}
          style={styles.qtyBtn}
        >
          <Text>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            alert
              ? handleAddToVoucher(item, alert)
              : Alert.alert('Check Price', 'Run deviation check first.')
          }
          style={[styles.qtyBtn, { marginLeft: 10, backgroundColor: '#4caf50' }]}
        >
          <Text style={{ color: 'white' }}>Add to Voucher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* -------------------- Voucher Cart Card -------------------- */

const VoucherCartCard = ({
  item,
  quantity,
  onUpdateQuantity,
  onRemove,
}: {
  item: SokoItem;
  quantity: number;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}) => {
  const priceNum = Number(item.sokoprice) || 0;
  return (
    <View style={styles.voucherCard}>
      <Text style={{ fontWeight: 'bold' }}>{item.sokoname}</Text>
      <Text>{item.itemBrand}</Text>
      <Text>Unit: KES {priceNum.toFixed(2)}</Text>
      <Text>Total: KES {(priceNum * quantity).toFixed(2)}</Text>

      <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => onUpdateQuantity(item.id, Math.max(1, quantity - 1))} style={styles.qtyBtn}><Text>-</Text></TouchableOpacity>
        <Text style={{ marginHorizontal: 8 }}>{quantity}</Text>
        <TouchableOpacity onPress={() => onUpdateQuantity(item.id, quantity + 1)} style={styles.qtyBtn}><Text>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onRemove(item.id)} style={[styles.qtyBtn, { marginLeft: 6, backgroundColor: '#f44336' }]}>
          <Text style={{ color: 'white' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* -------------------- Main Screen -------------------- */

const SellerConsumablesVoucherScreen = () => {
  const route = useRoute<any>();
  const sellerID = route.params.sellerAccount;
  const combContractID = route.params.id;

  const [filters, setFilters] = useState({ sokoname: '', itemBrand: '', itemSpecifications: '' });
  const [allItems, setAllItems] = useState<SokoItem[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [voucherItems, setVoucherItems] = useState<Record<string, { item: SokoItem; quantity: number }>>({});
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  /* ---------------- Fetch Items ---------------- */
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const res: any = await API.graphql(
          graphqlOperation(listSokoAds, { filter: { sokokntct: { eq: sellerID } } })
        );
        setAllItems(res?.data?.listSokoAds?.items || []);
      } catch {
        Alert.alert('Error', 'Could not load items.');
      }
      setLoading(false);
    };
    fetchItems();
  }, [sellerID]);

  /* ---------------- Filtering ---------------- */
  const filteredItems = useMemo(() => {
    const n = (s: string) => s.toLowerCase().trim();
    return allItems.filter(i =>
      (!filters.sokoname || n(i.sokoname).includes(n(filters.sokoname))) &&
      (!filters.itemBrand || n(i.itemBrand).includes(n(filters.itemBrand))) &&
      (!filters.itemSpecifications || n(i.itemSpecifications || '').includes(n(filters.itemSpecifications)))
    );
  }, [allItems, filters]);

  /* ---------------- Price Analysis (On Demand) ---------------- */
 const getPriceAlert = useCallback(async (item: SokoItem): Promise<PriceAlert> => {
  const priceNum = Number(item.sokoprice) || 0;
  const allowedMargin = Number(item.sokolnprcntg ?? 15);
  const itemSpecs = item.itemSpecifications || '';

  /* ---------------- Seller Average ---------------- */
  const sellerRes: any = await API.graphql(
    graphqlOperation(listMarketConsumptions, {
      filter: { marketItemID: { eq: item.id } }
    })
  );
  const sellerItems = sellerRes?.data?.listMarketConsumptions?.items || [];
  const sellerAvg = sellerItems.length
    ? sellerItems.reduce((sum: number, i: any) => sum + Number(i.price || 0), 0) / sellerItems.length
    : priceNum; // fallback if no entry
  const sellerDeviation = sellerAvg > 0 ? ((priceNum - sellerAvg) / sellerAvg) * 100 : 0;

  /* ---------------- Market Average ---------------- */
  const marketRes: any = await API.graphql(
    graphqlOperation(listMarketConsumptions, {
      filter: {
        sokoname: { eq: item.sokoname },
        itemBrand: { eq: item.itemBrand },
        itemSpecifications: { eq: itemSpecs },
      },
    })
  );
  const marketItems = marketRes?.data?.listMarketConsumptions?.items || [];
  const marketAvg = marketItems.length
    ? marketItems.reduce((sum: number, i: any) => sum + Number(i.price || 0), 0) / marketItems.length
    : sellerAvg; // fallback
  const marketDeviation = marketAvg > 0 ? ((marketAvg - sellerAvg) / sellerAvg) * 100 : 0;

  /* ---------------- Other Market Deviation ---------------- */
  const avgFilter: any = { itemName: { eq: item.sokoname }, itemBrand: { eq: item.itemBrand } };
  if (itemSpecs) avgFilter.itemSpecs = { eq: itemSpecs };
  const avgRes: any = await API.graphql(
    graphqlOperation(listAveragePrices, { filter: avgFilter })
  );
  const avgItems = avgRes?.data?.listAveragePrices?.items || [];
  const referencePrice = avgItems.length
    ? avgItems.reduce((sum: number, i: any) => sum + Number(i.itemPrice || 0), 0) / avgItems.length
    : sellerAvg; // fallback
  const otherMarketDeviation = referencePrice > 0 ? ((sellerAvg - referencePrice) / referencePrice) * 100 : 0;

  return {
    avgItemPrice: sellerAvg,
    itemDeviation: sellerDeviation,
    allowedMargin,
    consumptionMarginStatus: sellerDeviation <= allowedMargin ? 'Cleared' : 'NotCleared',
    priceFlag: sellerDeviation > allowedMargin ? 'ABOVE_REFERENCE' : 'NORMAL',
    avgCategoryPrice: marketAvg,
    categoryDeviation: marketDeviation,
    generalPriceDev: otherMarketDeviation,
  };
}, []);



  /* ---------------- Add To Voucher ---------------- */
  const handleAddToVoucher = useCallback((item: SokoItem, alert: PriceAlert) => {
    const qty = quantities[item.id] || 1;
    setVoucherItems(v => ({
      ...v,
      [item.id]: { item, quantity: (v[item.id]?.quantity || 0) + qty },
    }));
    Alert.alert('Added', `${item.sokoname} x${qty}`);
  }, [quantities]);

  /* ---------------- Generate Voucher ---------------- */
 const handleGenerateVoucher = useCallback(async () => {
  if (updating) return;
  setUpdating(true);
  try {
    // Fetch parent contract
    const parentRes: any = await API.graphql(
      graphqlOperation(getCombContract, { id: combContractID })
    );
    const parent = parentRes?.data?.getCombContract;

    if (!parent) {
      Alert.alert('Error', 'Parent contract not found.');
      setUpdating(false);
      return;
    }

    for (const v of Object.values(voucherItems)) {
      // Get price alert for this item
      const alert = await getPriceAlert(v.item);

      await API.graphql(graphqlOperation(createCombContractVoucher, {
        input: {
          combContractID,
          marketItemID: v.item.id,
          itemName: v.item.sokoname,
          itemBrand: v.item.itemBrand,
          itemSpecifications: v.item.itemSpecifications,
          itemPrice: Number(v.item.sokoprice),
          numberOfItems: v.quantity,

          // Parent contract info
          consumerEmail: parent.consumerEmail,
          funderEmail: parent.funderEmail,
          sellerEmail: parent.sellerEmail,
          consumerAccount: parent.consumerAccount,
          funderAccount: parent.funderAccount,
          sellerAccount: parent.sellerAccount,
          consumerContact: parent.consumerContact,
          funderContact: parent.funderContact,
          sellerContact: parent.sellerContact,
          consumerType: parent.consumerType,
          sellerType: parent.sellerType,
          funderType: parent.funderType,
          updateFrequency: parent.updateFrequency,

          // Names
          sellerName: parent.sellerName,
          consumerName: parent.consumerName,
          funderName: parent.funderName,
          sellerOfficerName: parent.sellerOfficerName,
          consumerOfficerName: parent.consumerOfficerName,
          funderOfficerName: parent.funderOfficerName,

          // Computed / Alert fields
          marketConsumptionPrice: Number(v.item.sokoprice),
          marketConsumptionFrequency: parent.marketConsumptionFrequency,
          marketConsumptionTotal: parent.marketConsumptionTotal,
          priceDeviation: alert.itemDeviation,
          consumptionCapping: parent.consumptionCapping,
          consumptionMarginStatus: alert.consumptionMarginStatus,
          consumptionMargin: alert.itemDeviation,
          referencePrice: alert.avgItemPrice,
          referencePriceSource: 'Market Data',
          priceFlag: alert.priceFlag,
          generalPriceDev: alert.generalPriceDev,

          // Status / Time
          accStatus: 'Pending',
          marketConsumptionStatus: 'Approved',
          lastUpdateTime: new Date().toISOString(),
          settlementTime: parent.settlementTime,
          prepostPay: parent.prepostPay,
          repaymentPeriod: parent.repaymentPeriod,
          voucherLastUpdate: Date.now(),
        },
      }));
    }

    // Update parent contract
    await API.graphql(graphqlOperation(updateCombContract, {
      input: {
        id: combContractID,
        accStatus: 'Completed',
        marketConsumptionStatus: 'Approved',
        lastUpdateTime: new Date().toISOString(),
      },
    }));

    const Message =  await API.graphql(
                            graphqlOperation(createMessages, {
                            input: {
                              senderEmail: parent.consumerEmail,
                              messageBody: `A COMB voucher has been generated by ${parent.sellerName}. 
                              Please go to COMB to approve or decline as per your funders specifications.`
                              
                                    },
                                  }),
                                );
                                
                           if (Message?.data?.createMessages){
            
                            await API.graphql(graphqlOperation(sendNotification, {
                    riderEmail: parent.consumerEmail,
                    title: "MiFedha: COMB Contract",
                    body: `A COMB voucher has been generated by ${parent.sellerName}. 
                              Please go to COMB to approve or decline as per your funders specifications.`,
                  }));

    setVoucherItems({});
    Alert.alert('Voucher Generated');
                }

  } finally {
    setUpdating(false);
  }
}, [voucherItems, updating]);


  /* ---------------- Render ---------------- */
  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Filters */}
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput placeholder="Name" value={filters.sokoname} onChangeText={t => setFilters(f => ({ ...f, sokoname: t }))} style={styles.input} />
        <TextInput placeholder="Brand" value={filters.itemBrand} onChangeText={t => setFilters(f => ({ ...f, itemBrand: t }))} style={styles.input} />
        <TextInput placeholder="Specs" value={filters.itemSpecifications} onChangeText={t => setFilters(f => ({ ...f, itemSpecifications: t }))} style={styles.input} />
      </View>

      {/* Items */}
      {loading ? <ActivityIndicator /> : (
        <FlatList
          data={filteredItems}
          keyExtractor={i => i.id}
          renderItem={({ item }) => (
            <ItemCard
              item={item}
              quantities={quantities}
              setQuantities={setQuantities}
              getPriceAlert={getPriceAlert}
              handleAddToVoucher={handleAddToVoucher}
            />
          )}
          contentContainerStyle={{ paddingBottom: 420 }}
        />
      )}

      {/* Voucher Cart */}
      {Object.keys(voucherItems).length > 0 && (
        <View style={{ position: 'absolute', bottom: 60, left: 0, right: 0 }}>
          <FlatList
            horizontal
            data={Object.values(voucherItems)}
            keyExtractor={v => v.item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            renderItem={({ item: v }) => (
              <VoucherCartCard
                item={v.item}
                quantity={v.quantity}
                onUpdateQuantity={(id, qty) =>
                  setVoucherItems(p => ({ ...p, [id]: { ...p[id], quantity: qty } }))
                }
                onRemove={(id) => {
                  const copy = { ...voucherItems };
                  delete copy[id];
                  setVoucherItems(copy);
                }}
              />
            )}
          />
        </View>
      )}

      {/* Generate Button */}
      <Pressable
        onPress={handleGenerateVoucher}
        disabled={updating || !Object.keys(voucherItems).length}
        style={[
          styles.button,
          {
            backgroundColor: updating || !Object.keys(voucherItems).length ? '#ccc' : '#f5a623',
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
          },
        ]}
      >
        {updating && <ActivityIndicator color="white" style={{ marginRight: 6 }} />}
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {updating ? 'Generating...' : `Generate Voucher — ${Object.keys(voucherItems).length} items`}
        </Text>
      </Pressable>
    </View>
  );
};

/* -------------------- Styles -------------------- */

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    marginRight: 4,
    borderRadius: 4,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
  },

  qtyBtn: {
    padding: 6,
    borderWidth: 1,
    borderColor: '#e58d29',
    borderRadius: 4,
  },
  
  voucherCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    width: 220,
    backgroundColor: '#fafafa',
  },
  button: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SellerConsumablesVoucherScreen;
