import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

const ChatCard = (props) => {

    const {t} = useTranslation();

	return (
	    <View style={ props.opened === 'closed' ? styles.card : styles.cardOpened}>      
            <Text style={props.opened === 'closed' ? styles.text : styles.textOpened}>{props.opened}</Text> 
        </View>
	);
}

const styles = StyleSheet.create({
    card : {
        width : 60,
        height : 30,
        backgroundColor : "#F2B3BA",
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 20
    },
    cardOpened : {
        width : 60,
        height : 30,
        backgroundColor : "#c2f2bf",
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 20
    },
    text : {
        color : 'red'
    },
    textOpened : {
        color : 'green'
    }
});

export default ChatCard;