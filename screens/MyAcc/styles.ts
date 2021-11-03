import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 650,
    resizeMode: 'cover',

    backgroundColor: '#db11ec',
  },

  accountView: {
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 150,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 10,
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

  

  myMoneyPressables: {
    backgroundColor: 'purple',
    marginHorizontal: 1,
    width: Dimensions.get('screen').width - 2,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    width: 80,
  },

  acPressables: {
    backgroundColor: 'purple',
    
    height: "60%",
    borderRadius: 5,
    marginTop: "4%",
    marginLeft:"2%",
    marginRight:"2%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    width: "30%",
  },

  acNonLnsPressables: {
    backgroundColor: 'blue',
    
    height: "99%",
    borderRadius: 5,
    marginTop: "4%",
    marginLeft:"2%",
    marginRight:"2%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
    width: "45%",
  },

  viewForSalesPressables: {
    backgroundColor: 'green',
    marginHorizontal: 15,
    width: Dimensions.get('screen').width - 30,
    height: 100,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  acPressableText: {
    color: 'white',
    fontSize: 12,
    marginTop: 1,
  },

  accountText: {
    fontSize: 25,
    color: 'white',
  },
});
export default styles;