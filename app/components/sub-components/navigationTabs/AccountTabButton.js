import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

let moreIcon = '../../../assets/icons/Home/moreIcon.png';


const AccountTabButton = (props) => {
    return (
        <TouchableOpacity style={ props.active === true ? styles.buttonActive : styles.button} onPress={()=>{props.onChangeTab(props.title)}}>
            <Text style={ props.active === true ? styles.textActive : styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        width : 100,
        height : 50,
        backgroundColor : 'white',
        borderWidth : 2,
        borderColor : '#D8D8D8',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 15
    },
    buttonActive : {
        width : 100,
        height : 50,
        backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 15
    },
    text : {
        fontSize : 16,
        color : 'black'
    },
    textActive : {
        fontSize : 16,
        color : 'black',
        color : 'white'
    }
})

export default AccountTabButton;
 