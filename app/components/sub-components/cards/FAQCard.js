import React, { useState , useEffect} from 'react';
import {Image, Text, View, ScrollView, StyleSheet, TouchableOpacity, I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';

import { useNavigation } from '@react-navigation/native';

//------------------------ screen ---------------------
const FAQCard = (props) => {

    const {t} = useTranslation();
    const navigation = useNavigation();

    navigateToSingleFAQ = (id, value) => {
        navigation.navigate('SingleFAQ',  {faq_id : id, title : value})
    }

	return (
                <TouchableOpacity style={styles.conatinerClosed} onPress={()=>{ navigateToSingleFAQ(props.item._id, props.item.title) }}>
                    <ScrollView>
                        <View style={styles.view}>
                            <View style={styles.leftView}>
                                <Text style={styles.title}>{props.item.title}</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.number}>{props.item.priority}</Text>
                            </View>
                        </View>
                        <View style={styles.view}>
                            <View style={styles.bottomView}>
                                <Text style={styles.date}>{props.item.createdAt.slice(0,10)}</Text>
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
    number : {
        fontSize : 16,
        color : 'black'
    },
    leftView : {
        alignItems : I18nManager.isRTL ? 'flex-start' : 'flex-end',
    },
    bottomView : {
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





export default FAQCard;