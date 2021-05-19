import React from 'react';
import {SafeAreaView,View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';


let bankIcon = '../../../assets/icons/Payment/bank.png';
let dataIcon = '../../../assets/icons/Payment/date.png';

const Transaction = (props) => {

    return (
        <TouchableOpacity style={props.middle == true ? styles.containerMiddle : styles.conatiner} onPress={props.onHandlePress}>
                {/* ---------------------------- icon section --------------------------- */}
                <View style={styles.iconView}>
                    <Image style={styles.bankIcon} source={require(bankIcon)} />
                </View>

                {/* ---------------------------- price section --------------------------- */}
                <View style={styles.priceView}>
                    <Text style={styles.priceValue}>{props.price}</Text>
                </View>

                {/* ---------------------------- date section --------------------------- */}
                <View style={styles.dateView}>
                    <View style={styles.dateIconView}>
                        <Image style={styles.dateIcon} source={require(dataIcon)} />
                    </View>
                    <View style={styles.dateValueView}>
                        <Text style={styles.dateValue}>{props.date}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        //flex : 1,
        flexDirection : 'row',
        height : 70,
        borderTopWidth : 2,
        borderTopColor : '#D8D8D8',
        borderBottomWidth : 2,
        borderBottomColor : '#D8D8D8'
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
