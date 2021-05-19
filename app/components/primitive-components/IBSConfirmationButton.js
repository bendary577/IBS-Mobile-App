import React from 'react';
import {View,Image,Text, TouchableOpacity, StyleSheet } from 'react-native';


let login = '../../assets/icons/Login/login.png';

const IBSConfirmationButton = (props) => {
    return (
        props.active ? 
        <TouchableOpacity style={styles.buttonActive} onPress={props.onHandlePress}>
                <Text style={styles.textActive}>Send Confirmation</Text>
         </TouchableOpacity>
         : 
         <TouchableOpacity style={styles.button} onPress={props.onHandlePress}>
                <Text style={styles.text}>Confirm</Text>
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
