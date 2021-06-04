import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MessageDetailsCard from '../../../components/sub-components/cards/MessageDetailsCard';
//import {t} from '../../../languages/i18Manager';
import {useTranslation} from 'react-i18next';

const MessageDetails = () => {

    const navigation = useNavigation();
    const {t} = useTranslation();
    
    const navigate = () => {
      navigation.navigate("MessageDtails");
    }

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.detailsView}>
                <View style={styles.fromView}>
                    <Text style={styles.text}>{t(`from`)} : </Text>
                    <Text style={styles.redText}>CIB</Text>
                </View>
                <Text style={styles.laseMessageText}>{t(`lastMessageOn`)} Dec’ 2020</Text>
            </View>
            <View style={styles.cardView}>
                <MessageDetailsCard message="Please wait while we transfer you to one of our customer support agent.." date="04: 16 pm" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
        padding : 20
    },
    fromView : {
        flexDirection : 'row'
    },
    titleView : {
        flex : 1,
        padding : 20,
    },
    text : {
        color : 'black',
        fontSize : 20
    },
    redText : {
        color : 'red',
        fontSize : 20
    },
    laseMessageText : {
        color : 'black',
        fontSize : 16
    },
    searchContainer : {
        backgroundColor : 'white',
        borderRadius : 0,
        },
    cardView : {
        flex : 4,
        marginTop : 20
    },

})

export default MessageDetails;
