import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MessageDetailsCard = (props) => {

	return (
            <View style={styles.card}>
                <Text style={styles.message}>{props.message}</Text>
                <Text style={styles.date}>{props.date}</Text> 
            </View>
	);
}

const styles = StyleSheet.create({
    card : {
        width : "100%",
        backgroundColor : "#D8D8D8",
        borderRadius : 10,
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        padding : 10,
        alignSelf: 'flex-start'
    },
    message : {
        fontSize : 16,
    },
    date : {
        color : 'gray'
    }
});

export default MessageDetailsCard;