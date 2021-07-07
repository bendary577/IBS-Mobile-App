import React, { useState , useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getClientSingleInformation} from '../../services/api_requests';
import Loading from '../../components/sub-components/general/Loading';
import {authorizeRequestWithData} from '../../services/authentication';
import NoContent from '../../components/sub-components/general/NoContent';
import { WebView } from 'react-native-webview';

//------------------------ screen ---------------------
const SingleInformation = ({route, navigation}) => {

    const [information, setInformation] = useState(null);
    const [loading , setLoading] = useState([]);
    const {t} = useTranslation();

    useEffect(() => {
        fetchInformation();
    }, [fetchInformation]);

    const fetchInformation = async () => {
        setLoading(true);
        let data = await authorizeRequestWithData(getClientSingleInformation, route.params.info_id);
        console.log("faq title is " + data.title)
        setInformation(data);
        setLoading(false)
    }

	return (

        loading === true ? 

        <Loading action={t(`loading`)}/>
        :
        information === null ? 
            <NoContent />
        :
        <WebView
            originWhitelist={['*']}
            source={{ html: '<h1 style=\" color : blue\">TEST html</h1>'}}
            style={{ marginTop: 20 }}
        />
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





export default SingleInformation;