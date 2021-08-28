import React, {useEffect, useState} from 'react';
import {SafeAreaView,View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Notification from '../../../components/sub-components/Notifications/Notification';
import NoContent from '../../../components/sub-components/general/NoContent';
import {getUserNotifications} from '../../../services/api_requests';

const Notifications = () => {

    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigation = useNavigation();


    useEffect(() => {
        fetchInfo();
    }, [fetchInfo]);

   
    const fetchInfo = async () => {
        setLoading(true);
        let response = await getUserNotifications();
        if(response.status===200){
            setNotifications(response.data.notifications)
        }else{
            setError(response.data.error)
        }
        setLoading(false)
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
