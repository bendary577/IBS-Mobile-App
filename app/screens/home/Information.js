import React, { useState , useEffect} from 'react';
import {SafeAreaView, Image,FlatList, Text,ScrollView, View, StyleSheet} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import {primaryRedColor} from '../../config/colors';
import {useTranslation} from 'react-i18next';
import {getClientInformation} from '../../services/api_requests';
import Loading from '../../components/sub-components/general/Loading';
import NoContent from '../../components/sub-components/general/NoContent';
import InformationCard from '../../components/sub-components/cards/InformationCard';

//------------------------ screen ---------------------
const Information = ({navigation}) => {

    const [information, setInformation] = useState(null);
    const [loading , setLoading] = useState([]);
    const [refreshing , setRefreshing] = useState(false);
    const [error, setError] = useState('');
    const {t} = useTranslation();

    useEffect(() => {
        fetchInfo();
    }, [fetchInfo]);

    const fetchInfo = async () => {
        setLoading(true);
        setError('');
        let response = await getClientInformation();
        if(response.status === 200) {
            console.log('information')
            setInformation(response.data.information);
        }else{
            setError(response.data.error)
        }
        setLoading(false)
        setRefreshing(false);
    }

    const handleRefresh = () => {
        setRefreshing(true)
        fetchInfo();
    }

	return (

        loading === true ? 

        <Loading action={t(`loading`)}/>

        :

        error !== '' ? 
        
        <Text style={styles.error}>{error}</Text>
        
        :

        information === null ? 
            <NoContent />
        :

	    <SafeAreaView style={styles.container}>

            {/* ------------------------------------- about text section ------------------------------------ */}
                <View style={styles.supportTicketsView}>
                    <FlatList
                            data={information}
                            renderItem={({item})=>( <InformationCard key={item._id.toString()} item={item} />)}
                            keyExtractor={(item) => item._id.toString()}
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                </View>
        </SafeAreaView>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical : 20,
        marginLeft : 10,
        marginBottom: 20
    },
    card : {
        width : 30,
        height: 30,
        backgroundColor : primaryRedColor,
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius : 8,
        marginRight : 5
    },
    supportTicketsView : {
        marginTop : '10%',
        flex : 4,
    },
    error : {
        flex : 1,
        flexDirection : 'column',
        fontSize : 20,
        textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        color : 'red',
        marginTop : "40%",
    },
});





export default Information;