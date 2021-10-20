import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
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

  myMoneyPressables: {
    backgroundColor: 'purple',
    marginHorizontal: 130,
    width: Dimensions.get('screen').width - 260,
    height: "40%",
    borderRadius: 20,
    marginRight:"1%",
    marginLeft:"1%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:"5%"
    
  },

  acPressables: {
    backgroundColor: 'purple',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    
  },

  

  acPressableText: {
    color: 'white',
    fontSize: 15,
    marginTop: 1,
  },

  accountText: {
    fontSize: 25,
    color: 'white',
  },
});
export default styles;