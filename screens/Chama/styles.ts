import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  adminImage: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    top:"2%"
  },

  clientsView: {
    backgroundColor: '#e58d29',
    marginHorizontal: 5,
    width: Dimensions.get('screen').width - 10,
    height: "18%",
    borderRadius: 4,
    marginTop:4,
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  acEarningsView: {
    backgroundColor: '#e58d29',
    marginHorizontal: 5,
    width: Dimensions.get('screen').width - 10,
    height: 95,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: "2%",
  },

  viewForClientsAndTitle: {
    backgroundColor: '#e58d29',
    width:"100%",
    height: "50%",
    borderRadius: 4,
   
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },

  viewForClientsCategories: {
    backgroundColor: '#e58d29',
    marginTop:"5%",
    marginBottom:"5%",
    height: "100%",
    borderRadius: 4,
    marginLeft:"0.5%",
    marginRight:"0.5%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: "33%"
  },

  

  viewForClientsCategoriesChama2: {
    backgroundColor: '#72ebd8',
    marginTop:"5%",
  
    height: "30%",
    borderRadius: 4,
    marginLeft:"2%",
    marginRight:"2%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: "90%"
  },

  viewForClientsCategoriesChama4: {
    backgroundColor: '#72ebd8',
    
    marginBottom:"5%",
    height: "70%",
    borderRadius: 4,
    marginLeft:"2%",
    marginRight:"2%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: "90%"
  },

  viewForClientsCategoriesChama3: {
    backgroundColor: 'blue',
    
    height: "100%",
    borderRadius: 4,
    marginLeft:"2%",
    marginRight:"2%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: "55%"
  },

  salesPressableText: {
    color: 'black',
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
    backgroundColor: '#72ebd8',
    width:"48%",
    marginLeft:"1%",
    marginRight:"1%",
    height: "90%",
    borderRadius: 4,
  
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    
  },

  ClientsPressablesLnStts: {
    backgroundColor: '#72ebd8',
    width:"48%",
    marginLeft:"1%",
    marginRight:"1%",
    height: "100%",
    borderRadius: 4,
  
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    
  },

  


  viewForAcEarningsPressables: {
    backgroundColor: '#e58d29',
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
    backgroundColor: '#72ebd8',
    
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
    color: 'black',
    fontSize: 10,
    marginTop: 1,
  },
  clientsPressableTextStts: {
    color: 'white',
    fontSize: 7,
    marginTop: 1,
  },

  salesText: {
    fontSize: 20,
    color: "blue",
    marginBottom:"1.5%"
  },

  
  acPressableText: {
    color: 'black',
    fontSize: 12,
    marginTop: 1,
  },

  accountText: {
    fontSize: 25,
    color: 'white',
  },
});
export default styles;