import React, {useState, useEffect, useRef} from 'react';

import {View, FlatList, useWindowDimensions, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {listAgents} from '../../../src/graphql/queries';
import * as Location from 'expo-location';

import {graphqlOperation, API} from 'aws-amplify';
import { useRoute } from '@react-navigation/core';

const GenralShpMpViewThree = props => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const [MFN, setMFN] = useState([]);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const route = useRoute()

    const flatlist = useRef();
  
    const width = useWindowDimensions().width;
  
    useEffect(() => {
      const fetchMFN = async () => {
        try {
          const response:any = await API.graphql(
            graphqlOperation(
              listAgents,

              { filter: {
                and: {
                  town: { contains: route.params.town},
                  
                  
                }
              }}
            )
          )
  
          setMFN(response.data.listAgents.items);
        } catch (e) {
          console.error(e);
        }
      };
  
      fetchMFN();
    }, [])

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  

    return (
      
        <MapView
          style={{width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: -0.5261561709274195,
            longitude: 37.58980744767201,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
          }}>
          {MFN.map((Agent) => (
        <Marker
          key={Agent.phonecontact}
          coordinate={{latitude: Agent.latitude, longitude: Agent.longitude}}
        >
          
            
          
        </Marker>
      ))}
    </MapView>
  );
};
  export default GenralShpMpViewThree;