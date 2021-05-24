import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import getFlipForRTLStyle from '../../../utils/utilFunctions';

let sendIcon = '../../../assets/icons/Support/send.png';


const ChatSendButton = (props) => {

    return (
        <TouchableOpacity style={styles.container} >
            <Image style={[styles.icon, getFlipForRTLStyle()]} source={require(sendIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon : {
        width : 45,
        height : 45,
        //end : 10,
    },
})

export default ChatSendButton;
 