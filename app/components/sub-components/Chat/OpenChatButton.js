import React from 'react'
import { Text, StyleSheet, TouchableOpacity, I18nManager } from 'react-native';
import {useTranslation} from 'react-i18next';

const OpenChatButton = (props) => {

    const {t} = useTranslation();

    return (
        <TouchableOpacity {...props} style={styles.button} onPress={()=>{props.onHandlePress()}}>
            <Text>{t(`reopen`)}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button : {
        width : 60,
        height : 35,
        borderRadius : 15,
        backgroundColor : '#A7A5A5',
        justifyContent : 'center',
        alignItems : 'center',
        left : I18nManager.isRTL ?  "450%" : "200%" ,
    },

})


export default OpenChatButton;
