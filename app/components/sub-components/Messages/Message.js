import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const Message = (props) => {
    return (
        <TouchableOpacity style={ props.open === true ? styles.conatinerOpened : styles.conatinerClosed} onPress={()=>{props.onHandlePress()}}>
            <View style={styles.view}>
                <View style={styles.leftView}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </View>
            <View style={styles.view}>
                <View style={[styles.leftView, styles.textContainer]}>
                    <Text style={styles.body} numberOfLines={2}>{props.body}</Text>
                </View>
                <View style={styles.rightView}>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conatinerClosed: {
        flexDirection : 'column',
        justifyContent : 'center',
        height : 80,
        padding : 8,
        borderTopWidth : 2,
        borderTopColor : '#D8D8D8',
    },
    conatinerOpened : {
        flexDirection : 'column',
        justifyContent : 'center',
        backgroundColor : '#EFBDC3',
        borderTopWidth : 2,
        borderTopColor : '#D8D8D8',
        height : 80,
        padding : 8,
    },
    view : {
        flexDirection : 'row',
    },
    title : {
        fontSize : 16,
        color : 'red'
    },
    number : {
        fontSize : 16,
        color : 'black'
    },
    leftView : {
        flex : 4
    },
    textContainer : {
        alignSelf: 'center'
    },
    body : {
        fontSize : 14,
        color : 'black',
    },
    rightView : {
        flex : 2,
        justifyContent : 'center',
        alignItems : 'center'
    },
    date : {
        fontSize : 16,
        color : '#1A1A1A',
    }
})

export default Message;