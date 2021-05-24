import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ChatCard = () => {

	return (
	    <View style={styles.card}>      
            <Text style={styles.text}>closed</Text> 
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
    text : {
        color : 'red'
    }
});

export default ChatCard;