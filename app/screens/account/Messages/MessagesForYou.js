import React,{useState, useEffect} from 'react';
import {SafeAreaView,View, StyleSheet, ScrollView } from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import IBSSearchBar from '../../../components/sub-components/inputs/IBSSearchBar';
import Message from '../../../components/sub-components/Messages/Message';
import {useTranslation} from 'react-i18next';
import { getBankMessages } from '../../../services/api_requests';
import Loading from '../../../components/sub-components/general/Loading';
import NoContent from '../../../components/sub-components/general/NoContent';

const MessagesForYou = () => {

    const [bankMessages, setBankMessages] = useState(null);
    const [renderedBankMessages, setRenderedBankMessages] = useState(null);
    const [loading, setLoading] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [error, setError] = useState('');
    const {t} = useTranslation();

    useEffect(() => {
        fetchInfo();
    }, [fetchInfo]);

    const fetchInfo = async () => {
        setLoading(true);
        let response = await getBankMessages();
        if(response.status===200){
            setBankMessages(response.data.newsfeed)
            setRenderedBankMessages(response.data.newsfeed)
        }else{
            setBankMessages.data(response.data.error)
        }
        setLoading(false)
    }

    const setKeywordValue = (value) => {
        setSearchKeyword(value);
    }

    const search = () => {
        setLoading(true)
        if(searchKeyword === ''){
            setRenderedBankMessages(bankMessages);
        }else{
            let newbBankMessages = bankMessages.filter((message)=>{
                return message.title === searchKeyword;
            })
            setRenderedBankMessages(newbBankMessages);
        }
        setLoading(false)
    }

    return (
        loading === true ? 

        <Loading action={t(`loading`)}/>

        :
        
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.titleView}>
               <TitleText value={t(`myMessages`)}/>
               <View style={styles.searchContainer}>
                   <IBSSearchBar setKeywordValue={setKeywordValue} search={search}/>
               </View>
            </View>
            <View style={styles.transactionsView}>
                <ScrollView>
                    {
                        renderedBankMessages === null || renderedBankMessages.length === 0 ? 
                             <NoContent />
                        : 
                        renderedBankMessages.map((message) => {
                            return <Message message={message} key={message._id.toString()}/>
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
        marginTop : 30,
        justifyContent : 'center',
        alignItems : 'center'
    },
    transactionsView : {
        flex : 4,
        marginTop : 20
    },
})

export default MessagesForYou;
