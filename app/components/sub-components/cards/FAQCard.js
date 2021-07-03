import React, { useState , useEffect} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';


//------------------------ screen ---------------------
const FAQCard = ({navigation}) => {

    const {t} = useTranslation();

    navigateToSingleFAQ = (id) => {
        this.props.navigation.navigate('SingleFAQ',  {faq_id : id})
    }

	return (
	        <TouchableOpacity style={styles.card} onPress={()=>{ navigateToSingleFAQ(props.item._id) }}>
                <Text style={styles.message}>{props.item.title}</Text> 
                <Text style={styles.message}>{props.item.priority}</Text> 
                <Text style={styles.message}>{props.item.visibility}</Text> 
            </TouchableOpacity>
	    );
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    card : {
        width : "100%",
        height : 150,
        backgroundColor : "#D8D8D8",
        borderRadius : 10,
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        padding : 10
    },
    message : {
        fontSize : 16,
    },
    date : {
        color : 'gray'
    }
});





export default FAQCard;