import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let notificationsIcon = '../../../assets/icons/Home/notifications.png';



const NotificationsButton = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{navigation.goBack()}} >
            <Image style={styles.icon} source={require(notificationsIcon)} />
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
 