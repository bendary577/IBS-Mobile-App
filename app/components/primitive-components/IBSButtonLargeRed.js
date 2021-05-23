import React from 'react';
import {View,Image,Text, TouchableOpacity, StyleSheet } from 'react-native';
import getFlipForRTLStyle from '../../utils/utilFunctions';

let login = '../../assets/icons/Login/login.png';

const IBSButtonLargeRed = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={()=>{props.onHandlePress()}}>
                <Text style={styles.text}>{props.value}</Text>
                {props.action === true ? 
                     <Image style={[styles.icon, getFlipForRTLStyle()]} source={require(login)} />
                :
                    <View></View>
                }
         </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor: '#EC253C',
        width: "93%",
        height: 55,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom : 10
    },
    text : {
        color : 'white',
        padding : 20,   
        fontSize : 18
    },
    icon : {
        width : 30,
        height : 15,
        marginRight : 25
    }
})

export default IBSButtonLargeRed
