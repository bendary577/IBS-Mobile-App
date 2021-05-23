import React from 'react';
import {Text,View, TouchableOpacity, StyleSheet } from 'react-native';


const IBSButtonLargeGray = (props) => {

    return (
        <TouchableOpacity style={styles.button} onPress={()=>{props.onHandlePress()}}>
            <Text style={styles.text}>{props.value}</Text>
            {props.action === true ? 
                     <Text style={styles.text}>{props.actionText}</Text>
                :
                    <View></View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection : 'row',
        backgroundColor: '#D8D8D8',
        width: "93%",
        height: 55,
        borderRadius: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom : 10
    },
    text : {
        color : 'black',
        padding : 15,   
        fontSize : 16
    },
})

export default IBSButtonLargeGray
