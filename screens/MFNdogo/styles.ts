import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  floatimage: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
  
    backgroundColor: '#db11ec',
  },
  

  viewForFloatPressables: {
    backgroundColor: 'skyblue',
    
    flex:10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    padding:4
    
  },

  floatView: {
    backgroundColor: 'purple',
    height:"80%",
    borderRadius: 20,
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  
  },

  
  floatPressableText: {
    color: 'white',
    fontSize: 11,
    marginTop: 1,
  },

  floatPressableText2: {
    color: 'white',
    fontSize: 8,
    marginTop: 1,
  },

  

  floatMainView: {
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: "17%",
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: "1%",
    
   
  },
  floatText: {
    fontSize: 25,
    color: 'white',
  },
});
export default styles;