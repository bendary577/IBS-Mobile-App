import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useTranslation} from 'react-i18next';

let login = '../../assets/icons/Login/login.png';

const IBSConfirmationButton = (props) => {

    const {t} = useTranslation();

    return (
        props.active ? 
        <TouchableOpacity style={styles.buttonActive} onPress={()=>{props.onHandlePress()}}>
                <Text style={styles.textActive}>{t(`sendConfirmation`)}</Text>
         </TouchableOpacity>
         : 
         <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.text}>{t(`confirm`)}</Text>
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonActive: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor: '#EC253C',
        width: "93%",
        height: 55,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom : 10
    },
    textActive : {
        color : 'white',
        padding : 20,   
        fontSize : 18
    },
    button : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor: 'gray',
        width: "93%",
        height: 55,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom : 10
    },
    text : {
        color : 'black',
        padding : 20,   
        fontSize : 18
    }
})

export default IBSConfirmationButton
