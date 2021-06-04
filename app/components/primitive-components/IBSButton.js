import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
//import { t } from '../../languages/i18Manager';
import {useTranslation} from 'react-i18next';

const IBSButton = (props) => {

    const {t} = useTranslation();

    return (
        <TouchableOpacity style={styles.button} onPress={()=>{props.onHandlePress()}}>
             <Text style={styles.buttonTxt}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EC253C',
        width: 140,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt : {
        color : 'white',
        fontSize : 16
    },
})

export default IBSButton
