import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  adminImage: {
    width: '100%',
    height: 650,
    resizeMode: 'cover',
    top:"2%"
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'green',
    width: '70%',
    marginLeft: 25,
    top: 5,
  },
  loanFriendButton: {
    backgroundColor: '#064bfb',
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 100,
    zIndex: 10,
  },

  chamaLoanAndCreditSalesButton: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 30,
    marginHorizontal: 30,
    width: Dimensions.get('screen').width - 60,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
  },

  ChamaLoanAndCreditSalesText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  loanAFriendText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  viewForPressables: {
    backgroundColor: 'green',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 200,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  viewForSalesPressables: {
    backgroundColor: 'green',
    marginHorizontal: 4,
    width: Dimensions.get('screen').width - 8,
    height: 170,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  SalesPressables: {
    backgroundColor: 'purple',
    marginHorizontal: 20,
    width: Dimensions.get('screen').width - 40,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    width: 80,
  },

  salesPressableText: {
    color: 'white',
    fontSize: 15,
    marginTop: 1,
  },

  viewForSalesText: {
    color: 'white',
    fontSize: 20,
    marginTop: 1,
    height: 50,
  },

  salesText: {
    fontSize: 25,
    color: 'white',
  },

  viewForClientsPressables: {
    backgroundColor: 'pink',
    marginHorizontal: 30,
    width: Dimensions.get('screen').width - 60,
    height: 40,
    borderRadius: 4,
    top: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 110,
  },

  viewForClientsCategories: {
    backgroundColor: 'pink',
    marginHorizontal: 1,
    width: Dimensions.get('screen').width - 1,
    height: 70,
    borderRadius: 4,
    top: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 113,
  },

  viewForClientsAndTitle: {
    backgroundColor: 'brown',
    marginHorizontal: 5,
    width: Dimensions.get('screen').width - 10,
    height: 70,
    borderRadius: 4,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top: 1,
  },

  clientsView: {
    backgroundColor: 'brown',
    width:"40%",
    marginHorizontal: "10%",
    height: 95,
    borderRadius: 4,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  ClientsPressables: {
    backgroundColor: 'purple',
    width:"47%",
    marginHorizontal: "2%",
    height: 40,
    borderRadius: 4,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    
  },

  clientsPressableText: {
    color: 'white',
    fontSize: 10,
    marginTop: 1,
  },

  acEarningsView: {
    backgroundColor: 'brown',
    marginHorizontal: 5,
    width: Dimensions.get('screen').width - 10,
    height: 95,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 30,
  },

  viewForAcEarningsPressables: {
    backgroundColor: 'brown',
    marginHorizontal: 15,
    width: Dimensions.get('screen').width - 30,
    height: 60,
    borderRadius: 20,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  earningsAcPressables: {
    backgroundColor: 'purple',
    
    height: 60,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
width:"40%",
    marginHorizontal: "10%"
  },

  earningsAcPressableText: {
    color: 'white',
    fontSize: 20,
    marginTop: 1,
  },
});
export default styles;