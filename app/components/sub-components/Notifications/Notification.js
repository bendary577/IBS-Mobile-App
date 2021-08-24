import React,{useState, useEffect, useRef} from 'react'
import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import { markNotificationsAsRead } from '../../../services/api_requests';
import * as Notifications from 'expo-notifications';

let replyIcon = '../../../assets/icons/Notifications/reply.png';
let messageIcon = '../../../assets/icons/Notifications/message.png';
let paymentIcon = '../../../assets/icons/Notifications/payment.png';

const Notification = (props) => {

    const notificationListener = useRef();
    const [notification, setNotification] = useState(false);
    const responseListener = useRef();

    useEffect(() => {
    

      }, []);

    const markAsRead = async (id) => {
        let response = await markNotificationsAsRead(id);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={()=> {markAsRead(props.id)}}>
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
        alignSelf: 'center',
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
        color : 'gray'
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
