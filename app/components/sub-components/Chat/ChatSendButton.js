import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import getFlipForRTLStyle from '../../../utils/utilFunctions';
let sendIcon = '../../../assets/icons/Support/send.png';


const ChatSendButton = (props) => {

    const {text,messageIdGenerator,user, onSend} = props

    const send = () => {
        if (text && onSend) {
            onSend({ text: text.trim(), user:user,_id:messageIdGenerator()}, true);
        }
    }

    return(
        <TouchableOpacity {...props} onPress= {()=>{ send()}} style={styles.sendButton} >
                <Image style={[styles.icon, getFlipForRTLStyle()]} source={require(sendIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sendButton : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center",
    },
    icon : {
        width : 60,
        height : 45 ,
        borderRadius : 10,
        marginBottom : 10
    },
})

export default ChatSendButton;
 