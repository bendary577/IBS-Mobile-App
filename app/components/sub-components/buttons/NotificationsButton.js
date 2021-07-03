import React,{useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

let notificationsIcon = '../../../assets/icons/Home/notifications.png';
let newNotificationIcon = '../../../assets/icons/Home/newNotification.png';


const NotificationsButton = () => {

    const [notifications, setNotifications] = useState([]);
    const [newNotification, setNewNotification] = useState({});
    const navigation = useNavigation();

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
    });

    //newNotification === {} && Object.keys(newNotification).length === 0

    useEffect(()=>{
        //get users notifications from rest api
        //....
        Notifications.addNotificationReceivedListener(notification => { 
            setNewNotification(notification); 
        });
    }, []);

    const onPressHandle = () => {
        setNewNotification({});
        navigation.navigate("Notifications",{notifications})
    }

    return (
        <TouchableOpacity onPress={()=>{onPressHandle()}}>
            <Image style={styles.icon} source={JSON.stringify(newNotification) === '{}' && Object.keys(newNotification).length === 0 ? require(notificationsIcon) : require(newNotificationIcon)} />
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    icon : {
        width : 25,
        height : 25,
        marginRight : 30
    },
})

export default NotificationsButton;
 