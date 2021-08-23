import React from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

//------------------------ screen ---------------------
const ClientCard = (props) => {

    const {t} = useTranslation();
    const navigation = useNavigation();

    navigateToClientPayments = (id, value) => {
        navigation.navigate('MyTransactions',  {info_id : id, title : value})
    }

	return (
                <TouchableOpacity style={styles.conatinerClosed} onPress={()=>{ navigateToClientPayments(props.item._id, props.item.title) }}>
                    <ScrollView>
                        <View style={styles.view}>
                        <View style={styles.leftView}>
                            <Text style={styles.title}>{I18nManager.isRTL ? props.item.job.ar : props.item.job.en}</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={styles.number}>{I18nManager.isRTL ? props.item.client.name.ar : props.item.client.name.en}</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <View style={styles.leftView}>
                            <Text style={styles.body} >{props.item._id}</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={[styles.date, styles.textAlign]}>{moment(props.item.hiringDate).format("MMM Do YY")}</Text>
                        </View>
                    </View>
                    </ScrollView>
                </TouchableOpacity>
	    );
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    conatinerClosed: {
        flexDirection : 'column',
        justifyContent : 'center',
        height : 80,
        padding : 8,
        backgroundColor : '#ffeae6',
        borderTopWidth : 2,
        borderTopColor : '#D8D8D8',
    },
    view : {
        flexDirection : 'row',
    },
    title : {
        fontSize : 16,
        color : 'red'
    },
    textAlign : {
        textAlign : I18nManager.isRTL ? 'left' : 'right', 
    },
    number : {
        fontSize : 16,
        color : 'black'
    },
    leftView : {
        alignItems : 'flex-start',
        flex : 4
    },
    body : {
        fontSize : 14,
        color : 'black',
    },
    rightView : {
        flex : 2,
        justifyContent : 'center',
        alignItems : 'flex-end',
        paddingRight : 10
    },
    date : {
        fontSize : 16,
        color : '#1A1A1A',
    },
    top : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'stretch'
    },
    message : {
        fontSize : 16,
    },
    employee : {
        color : 'blue'
    },
    date : {
        color : 'gray'
    }
});





export default ClientCard;