import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
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
        <TouchableOpacity {...props} onPress= {()=>{ send()}} style={styles.sendButton}>
            <Image style={[styles.icon, getFlipForRTLStyle()]} source={require(sendIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 2
    },
    icon : {
        width : 45,
        height : 45,
    },
})

export default ChatSendButton;
 