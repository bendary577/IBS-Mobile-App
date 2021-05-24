import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const TransactionMessage = (props) => {
    return (
        <TouchableOpacity style={ props.item.statusFormatted === "open" ? styles.conatinerOpened : styles.conatinerClosed} onPress={()=>{props.onHandlePress(props.item._id, props.item.uid, props.item.statusFormatted)}}>
            <View style={styles.view}>
                <View style={styles.leftView}>
                    <Text style={styles.title}>{props.item.issue}</Text>
                </View>
                <View style={styles.rightView}>
                    <Text style={styles.number}>#{props.item.status}</Text>
                </View>
            </View>
            <View style={styles.view}>
                <View style={styles.leftView}>
                    <Text style={styles.body} numberOfLines={1}>{props.item.description}</Text>
                </View>
                <View style={styles.rightView}>
                    <Text style={styles.date}>{props.item.createdAt.slice(0,4)}</Text>
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

export default TransactionMessage;
