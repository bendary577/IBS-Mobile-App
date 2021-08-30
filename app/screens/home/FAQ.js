import React, { useState , useEffect} from 'react';
import {Image, SafeAreaView,Dimensions,ScrollView, Text, View, FlatList, StyleSheet} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import {primaryRedColor} from '../../config/colors';
import {useTranslation} from 'react-i18next';
import {getFAQ} from '../../services/api_requests';
import Loading from '../../components/sub-components/general/Loading';
import NoContent from '../../components/sub-components/general/NoContent';
import FAQCard from '../../components/sub-components/cards/FAQCard';

//------------------------ screen ---------------------
const FAQ = ({navigation}) => {

    const [faqs, setFAQ] = useState(null);
    const [loading , setLoading] = useState([]);
    const [error, setError] = useState('');
    const {t} = useTranslation();

    const dimensions = Dimensions.get('window');
    const screenWidth = dimensions.width;


    useEffect(() => {
        fetchFAQ();
    }, [fetchFAQ]);

    const fetchFAQ = async () => {
        setLoading(true);
        setError('');
        let response = await getFAQ();
        if(response.status === 200) {
            setFAQ(response.data.faq);
        }else{
            setError(response.data.error);
        }
        setLoading(false)
    }

	return (

        loading === true ? 

        <Loading action={t(`loading`)}/>

        :

        error !== '' ? 
        
        <Text style={styles.error}>{error}</Text>
        
        :

        faqs === null ? 
            <NoContent />
        :

	    <SafeAreaView style={styles.container}>
            {/* ------------------------------------- about text section ------------------------------------ */}
            <ScrollView>
                <View style={styles.supportTicketsView}>
                    {/*
                    <FlatList
                        data={faqs}
                        renderItem={({item})=>( <FAQCard key={item._id} item={item} />)}
                        keyExtractor={(item) => item._id}
                    />
                    */}
                    {
                        faqs.map((faq)=>{
                            return <FAQCard key={faq._id} item={faq} />
                        })
                    }
                </View>
            </ScrollView>
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





export default FAQ;