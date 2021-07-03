import React, { useState , useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getSingleFAQ} from '../../services/api_requests';
import Loading from '../../components/sub-components/general/Loading';
import {authorizeRequestWithData} from '../../services/authentication';
import NoContent from '../../components/sub-components/general/NoContent';
import { WebView } from 'react-native-webview';

//------------------------ screen ---------------------
const SingleFAQ = ({navigation}) => {

    const [faq, setFAQ] = useState(null);
    const [loading , setLoading] = useState([]);
    const {t} = useTranslation();

    useEffect(() => {
        fetchFAQ();
    }, [fetchFAQ]);

    const fetchFAQ = async () => {
        setLoading(true);
        let data = await authorizeRequestWithData(getSingleFAQ, route.params.faq_id);
        setFAQ(data);
        setLoading(false)
    }

	return (

        loading === true ? 

        <Loading action={t(`loading`)}/>
        :
        faq === null ? 
            <NoContent />
        :
	    <View style={styles.container}>
            <Text>data</Text>
        </View>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 50,
        paddingHorizontal: 20
    },
});





export default SingleFAQ;