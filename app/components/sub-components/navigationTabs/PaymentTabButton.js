import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let paymentIcon = '../../../assets/icons/Home/paymentIcon.png';
let paymentIconInactive = '../../../assets/icons/Home/paymentIconInactive.png';


const PaymentTabButton = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{ navigation.navigate("MyTransactions") }}>
            <Image style={styles.icon} source={
                props.active === true ? 
                require(paymentIcon)
            : 
                require(paymentIconInactive)
            } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 30,
        height : 30,
    },
})

export default PaymentTabButton;
 