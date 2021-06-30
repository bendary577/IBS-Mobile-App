import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useTranslation} from 'react-i18next';

const ChatClosedToolbar = (props) => {

    const {t} = useTranslation();

    return (
            <View style={styles.container}>
                <Text style={styles.blackText}>{t(`chatClosed_1`)}</Text>
                <Text style={styles.black}>{t(`chatClosed_2`)}<Text style={[styles.redText, {marginLeft : 3}]}>{t(`chatClosed`)}</Text></Text>
            </View>
    )
}


const styles = StyleSheet.create({
    conatiner: {
        padding : 10,
        flex : 5,
    },
    blackText : {
        color : 'black'
    },
    redText : {
        color : 'red'
    },

})


export default ChatClosedToolbar;
