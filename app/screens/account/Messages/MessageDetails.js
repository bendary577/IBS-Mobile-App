import React,{useState, useEffect} from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import MessageDetailsCard from '../../../components/sub-components/cards/MessageDetailsCard';
import {useTranslation} from 'react-i18next';
import {getSingleBankMessage} from '../../../services/api_requests';
import Loading from '../../../components/sub-components/general/Loading';
import moment from 'moment';
import { I18nManager } from 'react-native';
import NoContent from '../../../components/sub-components/general/NoContent';

const MessageDetails = (props) => {

    const [loading , setLoading] = useState(false);
    const [bankMessage, setBankMessage] = useState(null);
    const [error, setError] = useState('');
    const {t} = useTranslation();

    useEffect(() => {
        fetchInfo();
    }, [fetchInfo]);

    const fetchInfo = async () => {
        setLoading(true);
        let response = await getSingleBankMessage(props.route.params.id);
        if(response.status===200){
            console.log(response.data);
            setBankMessage(response.data.newfeed)
        }else{
            setError(response.data.error)
        }
        setLoading(false)
    }

    return (

        loading === true ? 

        <Loading action={t(`loading`)}/>

        :

        bankMessage === null ? 
        <NoContent />

        :
        
        error !== '' ?
        
        <Text>error</Text>
        
        :

        <SafeAreaView style={styles.conatiner}>
            <View style={styles.detailsView}>
                <View style={styles.fromView}>
                    {/* <Text style={styles.text}>{t(`from`)} : CIB </Text> */}

                </View>
                <Text style={styles.laseMessageText}>{t(`lastMessageOn`)} {moment(bankMessage.createdAt).format("MMM Do YY")} </Text>
            </View>
            <View style={styles.cardView}>
                <MessageDetailsCard message={I18nManager.isRTL ? bankMessage.body.ar : bankMessage.body.en } date={moment(bankMessage.createdAt).format("MMM Do YY HH:mm:ss")} />
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
