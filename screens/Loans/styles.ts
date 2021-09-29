import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 650,
    resizeMode: 'cover',

    backgroundColor: '#f5cd07',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'green',
    width: '70%',
    marginLeft: 25,
    marginTop: 90,
  },

  loanFriendButton: {
    backgroundColor: '#355def',
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    zIndex: 100,
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
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 150,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
export default styles;