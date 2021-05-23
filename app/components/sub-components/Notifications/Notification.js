import React from 'react'
import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'

let replyIcon = '../../../assets/icons/Notifications/reply.png';
let messageIcon = '../../../assets/icons/Notifications/message.png';
let paymentIcon = '../../../assets/icons/Notifications/payment.png';

const Notification = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconView}>
                <Image style={styles.icon} source={
                    props.type==="reply" ? 
                        require(replyIcon)
                    :
                    props.type==="message" ? 
                        require(messageIcon)
                    :
                        require(paymentIcon)

                    } />
            </View>
            <View style={styles.title}>
                <Text style={ props.read === true ? styles.titleRead : styles.titleUnread}>{props.title}</Text>
                <Text style={styles.body}>{props.body}</Text>
            </View>
            <View style={styles.dateView}>
                <Text style={styles.date}>{props.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        borderColor : '#D8D8D8',
        borderWidth : 2,
        height : 80,
        padding : 8,
    },
    iconView : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    icon : {
        width : 40,
        height : 40
    },
    title : {
        flex : 2
    },
    titleRead : {
        color : 'black'
    },
    titleUnread : {
        color : 'red'
    },
    body : {
        color : 'black'
    },
    dateView : {
        flex : 1,
        alignItems : 'flex-end'
    },
    date : {
        color : 'gray'
    }

})

export default Notification;
