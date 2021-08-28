import React from 'react';
import {View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const Transaction = (props) => {
    const navigation = useNavigation();

    const navigateToPaymentDetails = () => {
        navigation.navigate("PaymentDetails", {paymentId : props.item._id});
    }
    return (
        <TouchableOpacity style={styles.conatiner} onPress={()=>{props.onHandlePress(props.item._id)}} >
                {/* ---------------------------- icon section --------------------------- */}
                <View style={styles.iconView}>
                    <Image style={styles.bankIcon} source={require('../../../assets/icons/Payment/bank.png')} />
                </View>

                {/* ---------------------------- price section --------------------------- */}
                <View style={styles.priceView}>
                    <Text style={styles.priceValue}>{props.item.total} {props.item.currency.en}</Text>
                </View>

                {/* ---------------------------- date section --------------------------- */}
                <View style={styles.dateView}>
                    <View style={styles.dateIconView}>
                        <Image style={styles.dateIcon} source={require('../../../assets/icons/Payment/date.png')} />
                    </View>
                    <View style={styles.dateValueView}>
                        <Text style={styles.dateValue}>{moment(props.item.createdAt).format("MMM Do")}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection : 'row',
        height : 70,
        borderTopWidth : 2,
        borderTopColor : '#D8D8D8',
    },
    containerMiddle : {
        flexDirection : 'row',
        height : 70,
    },
    iconView : {
        flex : 2,
        justifyContent : 'center',
        alignItems : 'center'
    },
    bankIcon : {
        marginRight : 25
    },
    priceView : {
        flex : 2,
        justifyContent : 'center',
    },
    priceValue : {
        fontSize : 16,
        color : 'red'
    },
    dateView : {
        flex : 2,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
    },
    dateIconView : {
        
    },
    dateIcon : {
        width : 20,
        height : 20,
        marginRight : 5
    },
    dateValueView : {

    },
    dateValue : {
        fontSize : 16
    }
})

export default Transaction;
