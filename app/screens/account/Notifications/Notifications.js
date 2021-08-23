import React, {useEffect, useState} from 'react';
import {SafeAreaView,View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Notification from '../../../components/sub-components/Notifications/Notification';
import NoContent from '../../../components/sub-components/general/NoContent';
//import messaging from '@react-native-firebase/messaging';

const Notifications = ({route}) => {

    const [notifications, setNotifications] = useState([]);
    const navigation = useNavigation();


    useEffect(() => {
        /*
        console.log("set notifications");
        setNotifications(route.params.notifications);

        messaging().onMessage(async remoteMessage => {
          console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('Notification caused app to open from background state:', JSON.stringify(remoteMessage))});

        //Check whether an initial notification is available
        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
            console.log(
                'Notification caused app to open from quit state:',
                JSON.stringify(remoteMessage),
            );
            }
        });
        */
    }, []);

   
    const navigate = () => {
      navigation.navigate("MessageDetails");
    }

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.transactionsView}>
                <ScrollView>
                    {
                        notifications.length === 0 ? 
                        <NoContent />
                        :
                        notifications.map((notification) => {
                            return <Notification id={notification._id} read={!notification.unread} title={notification.title} body="Hello Ahmed how are you ? I hop…" date ={notification.message} type={notification.type}/>
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
    },
    titleView : {
        flex : 1,
        padding : 20,
    },
    searchContainer : {
        backgroundColor : 'white',
        borderRadius : 0,
        },
    transactionsView : {
        flex : 4,
        marginTop : 20
    },

})

export default Notifications;
