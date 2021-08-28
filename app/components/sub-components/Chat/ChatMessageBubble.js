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
                    color: 'white',
                },
            }}
                wrapperStyle={{
                    left: {
                    backgroundColor: '#49494a',
                },
                    right: {
                    backgroundColor: "#DEDBDB",
                },
            }}
        />
    )
}

export default ChatMessageBubble;
