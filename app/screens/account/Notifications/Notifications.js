import React from 'react';
import {SafeAreaView,View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Notification from '../../../components/sub-components/Notifications/Notification';

const Notifications = () => {

    const navigation = useNavigation();

    const navigate = () => {
      navigation.navigate("MessageDetails");
    }

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.transactionsView}>
                <ScrollView>
                    <Notification read={false} title="New Message For you" body="Hello Ahmed how are you ? I hop…" date ="Dec’ 2020" type="message"/>
                    <Notification read={true} title="New Message For you" body="Hello Ahmed how are you ? I hop…" date ="Dec’ 2020" type="reply"/>
                    <Notification read={false} title="New Message For you" body="Hello Ahmed how are you ? I hop…" date ="Dec’ 2020" type="message"/>
                    <Notification read={false} title="New Message For you" body="Hello Ahmed how are you ? I hop…" date ="Dec’ 2020" type="payment"/>
                    <Notification read={true} title="New Message For you" body="Hello Ahmed how are you ? I hop…" date ="Dec’ 2020" type="message"/>
                    <Notification read={false} title="New Message For you" body="Hello Ahmed how are you ? I hop…" date ="Dec’ 2020" type="reply"/>
                    <Notification read={false} title="New Message For you" body="Hello Ahmed how are you ? I hop…" date ="Dec’ 2020" type="message"/>
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
