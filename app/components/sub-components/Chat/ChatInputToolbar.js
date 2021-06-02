import React from 'react'
import {InputToolbar} from 'react-native-gifted-chat';

const ChatInputToolbar = (props) => {
    return (
        <InputToolbar
        {...props} 
        containerStyle={{
            backgroundColor : '#D8D8D8',
            height : 70,
            borderTopRightRadius : 15,
            borderTopLeftRadius : 15,
            marginTop : 10,
            flexDirection : 'column',
            //flex : 1
        }}
        />
    )
}


export default ChatInputToolbar;
