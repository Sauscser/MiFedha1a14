import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',

    backgroundColor: '#f5cd07',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    width: '70%',
    marginLeft: "5%",
    marginTop: "25%",
  },

  loanFriendButton: {
    backgroundColor: '#355def',
    height: "12%",
    borderRadius: 30,
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: "5%",
    zIndex: 100,
  },

  chamaLoanAndCreditSalesButton: {
    backgroundColor: 'white',
    height: "40%",
    borderRadius: 30,
    marginHorizontal: 30,
    width: Dimensions.get('screen').width - 60,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: "1%",
  },

  ChamaLoanAndCreditSalesText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    
  },
  loanAFriendText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    
  },

  viewForPressables: {
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: "34%",
    borderRadius: 20,
    marginTop: "2%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
export default styles;