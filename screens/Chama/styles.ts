import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  adminImage: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    top:"2%"
  },

  clientsView: {
    backgroundColor: 'brown',
    width:"100%",
    height: "21%",
    borderRadius: 4,
    marginTop:4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  viewForClientsAndTitle: {
    backgroundColor: 'brown',
    width:"100%",
    height: "50%",
    borderRadius: 4,
   
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },

  viewForClientsCategories: {
    backgroundColor: 'brown',
    marginTop:"5%",
    marginBottom:"5%",
    height: "100%",
    borderRadius: 4,
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: "33%"
  },

  salesPressableText: {
    color: 'white',
    fontSize: 13,
    
  },

  viewForClientsPressables: {
    backgroundColor: 'pink',
    
    height: "100%",
    borderRadius: 4,
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%",
    
  },

  ClientsPressables: {
    backgroundColor: 'purple',
    width:"45%",
    marginLeft:"1%",
    marginRight:"1%",
    height: "90%",
    borderRadius: 4,
  
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    
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
    marginTop: "2%",
  },


  viewForAcEarningsPressables: {
    backgroundColor: 'brown',
    marginHorizontal: 15,
    width: Dimensions.get('screen').width - 30,
    height: "60%",
    borderRadius: 20,
    marginTop: "0.5%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  myMoneyPressables: {
    backgroundColor: 'purple',
    
    height: "90%",
    borderRadius: 20,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft:"2%",
    marginRight:"2%",
    width: "20%",
  },

  clientsPressableText: {
    color: 'white',
    fontSize: 10,
    marginTop: 1,
  },

  salesText: {
    fontSize: 20,
    color: "blue",
    marginBottom:"1.5%"
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