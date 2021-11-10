import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = props => {
    const {cordinate, name, onPress, isSelected} = props;
    return (
      <Marker coordinate={cordinate} onPress={onPress}>
        <View
          style={{
            backgroundColor: isSelected ? 'black' : 'white',
            padding: 3,
            borderRadius: 5,
            borderColor: 'green',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: isSelected ? 'white' : 'black',
              fontSize: 10,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
        </View>
      </Marker>
    );
  };
  
  export default CustomMarker;