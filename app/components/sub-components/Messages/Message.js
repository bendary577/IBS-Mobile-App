import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const Message = (props) => {
    return (
        <TouchableOpacity style={ props.open === true ? styles.conatinerOpened : styles.conatinerClosed} onPress={()=>{props.navigate()}}>
            <View style={styles.view}>
                <Text style={styles.title}>{props.title}</Text>
                {
                    props.transaction === true ? 
                        <Text style={styles.number}>{props.number}</Text>
                    : 
                    <></>
                }

            </View>
            <View style={styles.view}>
                <Text style={styles.body}>{props.body}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conatinerClosed: {
        flexDirection : 'column',
        justifyContent : 'center',
        borderColor : '#D8D8D8',
        borderWidth : 2,
        height : 80,
        padding : 8,
    },
    conatinerOpened : {
        flexDirection : 'column',
        justifyContent : 'center',
        borderColor : '#D8D8D8',
        borderWidth : 2,
        backgroundColor : '#EFBDC3',
        height : 80,
        padding : 8,
    },
    view : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    title : {
        fontSize : 16,
        color : 'red'
    },
    number : {
        fontSize : 16,
        color : 'black'
    },
    body : {
        fontSize : 14,
        color : 'black'
    },
    date : {
        fontSize : 16,
        color : '#1A1A1A'
    }
})

export default Message;
