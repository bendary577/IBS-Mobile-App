import React from 'react';
import {SafeAreaView,View, Text, StyleSheet, ScrollView, Image } from 'react-native';



let newTicketIcon = '../../../assets/icons/Support/newTicket.png';

const Chat = () => {


    return (
        <SafeAreaView style={styles.conatiner}>
            <Text>chat</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
    },
})

export default Chat;
