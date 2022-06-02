import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    top:"2%",
    
    alignItems: 'center',
    flexDirection: 'column',

    backgroundColor: '#e58d29',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'skyblue',
    width: '70%',
    marginLeft: "5%",
    
  },

  loanFriendButton: {
    backgroundColor: '#72ebd8',
    
    height: "90%",
    borderRadius: 30,
    
    width: "60%",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:"1%",
    marginLeft:"1%",
    marginTop: "1%",
    
    
    
  },

  chamaLoanAndCreditSalesButton: {
    backgroundColor: 'white',
    height: "50%",
    borderRadius: 30,
    marginHorizontal: 30,
    width: Dimensions.get('screen').width - 60,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: "1%",
  },

  chamaLoanAndCreditSalesButton4: {
    backgroundColor: 'white',
    height: "90%",
    borderRadius: 30,
    width:"90%",
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: "1%",
  },

  chamaLoanAndCreditSalesButton5: {
    backgroundColor: 'white',
    height: "90%",
    borderRadius: 30,
    width:"90%",
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: "1%",
  },

  ChamaLoanAndCreditSalesText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    
  },

  ChamaLoanAndCreditSalesText4: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    
  },

  loanAFriendText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    
  },

  viewForPressables1: {
    backgroundColor: '#72ebd8',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: "10%",
    borderRadius: 20,
    marginTop: "2%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
   
  },

  viewForPressables2: {
    backgroundColor: '#e58d29',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: "15%",
    borderRadius: 20,
    marginTop: "8%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  viewForPressables3: {
    backgroundColor: '#72ebd8',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: "25%",
    borderRadius: 20,
    marginTop: "9%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  viewForPressables4: {
    backgroundColor: 'white',
    height: "30%",
    borderRadius: 30,
    marginHorizontal: 30,
    width: Dimensions.get('screen').width - 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: "1%",
  },
  
});
export default styles;