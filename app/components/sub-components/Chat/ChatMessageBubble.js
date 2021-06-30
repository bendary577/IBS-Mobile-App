import React from 'react'
import {Bubble } from 'react-native-gifted-chat';

const ChatMessageBubble = (props) => {
    return (
        <Bubble
        {...props}
                textStyle={{
                    right: {
                    color: 'black',
                },
                    left: {
                    color: 'black',
                },
            }}
                wrapperStyle={{
                    left: {
                    backgroundColor: '#A7A5A5',
                },
                    right: {
                    backgroundColor: "#DEDBDB",
                },
            }}
        />
    )
}

export default ChatMessageBubble;
