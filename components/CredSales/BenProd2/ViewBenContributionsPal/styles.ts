import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        margin: 25,
        
    },

    
    ownerName: {
        fontSize: 15,
        fontWeight: '900',
        color: '#ad1c65'
    },

    ownerContact: {
        fontSize: 15,
        fontWeight: '900',
        color: '#981658'
    },

    amountoffered: {
        fontSize: 15,
        fontWeight: '900',
        color: '#88124e',
        
    },

    subTitle: {
        fontSize: 25,
        fontWeight: '900',
        color: '#88124e',
        marginTop:"5%",
        textDecorationLine: "underline"
    },


    repaymentPeriod: {
        fontSize: 15,
        fontWeight: '900',
        color: '#7b0e45',
        marginTop:10
    },

    interest: {
        fontSize: 15,
        fontWeight: '900',
        color: '#69093a'
    },

    

    loanerotherdescriptions: {
        fontSize: 15,
        fontWeight: '900',
        color: '#420423'
    }, 

    loanAdvert: {
        fontSize:35,
        justifyContent: 'center',
        color: 'blue',
        
        top: 2
    },

    viewForPressables2: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        width:"60%"

      },
      loanFriendButton: {
        
        width: "50%",
        marginRight:"20%",
        marginLeft:"20%",
        marginTop:"10%"
      
      },


});
export default styles