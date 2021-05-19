import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

let settings = '../../../assets/icons/Profile/settings.png';
let settingsActive = '../../../assets/icons/Profile/settingsActive.png';

const AccountTabButton = (props) => {
    return (
        <TouchableOpacity style={ props.active === true ? styles.buttonActive : styles.button} onPress={()=>{props.onChangeTab(props.title)}}>
            <Text style={ props.active === true ? styles.textActive : styles.text}>{props.title}</Text>
            { props.hasIcon === true ? 
                <Image style={styles.settingsIcon} source={ props.active === true ? require(settingsActive) : require(settings)} />
                : 
                <View></View>
            }   

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        width : 130,
        height : 50,
        backgroundColor : 'white',
        borderWidth : 2,
        borderColor : '#D8D8D8',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        borderRadius : 15,
        flexDirection : 'row',
    },
    buttonActive : {
        width : 130,
        height : 50,
        backgroundColor : 'red',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        borderRadius : 15,
        flexDirection : 'row',
    },
    text : {
        fontSize : 16,
        color : 'black',
    },
    textActive : {
        fontSize : 16,
        color : 'black',
        color : 'white',
    },
    settingsIcon : {
        width : 15,
        height : 15
    }
})

export default AccountTabButton;
 