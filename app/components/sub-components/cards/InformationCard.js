import React, { useState , useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

//------------------------ screen ---------------------
const InformationCard = (props) => {

    const {t} = useTranslation();
    const navigation = useNavigation();

    navigateToSingleInformation = (id, value) => {
        navigation.navigate('SingleInformation',  {info_id : id, title : value})
    }

	return (
                <TouchableOpacity style={styles.conatinerClosed} onPress={()=>{ navigateToSingleInformation(props.item._id, props.item.title) }}>
                    <ScrollView>
                        <View style={styles.view}>
                        <View style={styles.leftView}>
                            <Text style={styles.title}>{props.item.title}</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={styles.number}>Client {props.item.client}</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <View style={styles.leftView}>
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





export default InformationCard;