import React from 'react'
import {Bubble } from 'react-native-gifted-chat';

const ChatMessageBubble = (props) => {
    return (
        <Bubble
        {...props}
                textStyle={{
                    right: {
                    color: 'white',
                },
                    left: {
                    color: '#24204F',
                },
            }}
                wrapperStyle={{
                    left: {
                    backgroundColor: '#E6F5F3',
                },
                    right: {
                    backgroundColor: "red",
                },
            }}
        />
    )
}

export default ChatMessageBubble;
