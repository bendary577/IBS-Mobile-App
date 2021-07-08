import React, { useState , useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getClientSingleInformation} from '../../services/api_requests';
import Loading from '../../components/sub-components/general/Loading';
import {authorizeRequestWithData} from '../../services/authentication';
import NoContent from '../../components/sub-components/general/NoContent';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <Text style={{padding : 15, fontSize:20, fontWeight : 'bold'}}>{information.title}</Text>
                <Text style={{paddingHorizontal : 15, fontSize:16, color : '#70706f'}}>{information.description}</Text>
                <View style={{justifyContent : 'center', alignItems : 'center', marginBottom : 10}}>
                    <View style={{backgroundColor : '#c4c4c4', borderRadius : 10, width : '90%', height: 40, justifyContent : 'center',padding : 5}}>
                        <Text>Ahmed Haron Fawy Mohamed</Text>
                    </View>
                </View>

            </View>
            <WebView
                originWhitelist={['*']}
                source={{ html: '<h1 style=\" color : blue\">TEST html</h1>'}}
                style={styles.webView}
            />
        </SafeAreaView>

	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flex : 1,
        display: 'flex',
        flexDirection : 'column',
    },
    heading : {

    },
    webView : {

    },
});





export default SingleInformation;