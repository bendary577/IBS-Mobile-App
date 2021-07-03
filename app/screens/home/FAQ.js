import React, { useState , useEffect} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import {primaryRedColor} from '../../config/colors';
import {useTranslation} from 'react-i18next';
import {getFAQ} from '../../services/api_requests';
import Loading from '../../components/sub-components/general/Loading';
import {authorizeRequest} from '../../services/authentication';
import NoContent from '../../components/sub-components/general/NoContent';
import FAQCard from '../../components/sub-components/cards/FAQCard';

//------------------------ screen ---------------------
const FAQ = ({navigation}) => {

    const [faqs, setFAQ] = useState(null);
    const [loading , setLoading] = useState([]);
    const {t} = useTranslation();

    useEffect(() => {
        fetchFAQ();
    }, [fetchFAQ]);

    const fetchFAQ = async () => {
        setLoading(true);
        let data = await authorizeRequest(getFAQ);
        setFAQ(data);
        setLoading(false)
    }

	return (

        loading === true ? 

        <Loading action={t(`loading`)}/>

        :

        faqs === null ? 
            <NoContent />
        :

	    <View style={styles.container}>
            {/* ------------------------------------- header section ------------------------------------ */}
            <View style={styles.header}>
                <View style={styles.card}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/aboutUs/about.png')}
                    />  
                </View>
                <TitleText value="FAQ"/>
            </View>

            {/* ------------------------------------- about text section ------------------------------------ */}
            <View>
                <View style={styles.supportTicketsView}>
                    <FlatList
                        data={faqs}
                        renderItem={({item})=>(<FAQCard item={item} onHandlePress={navigateToSingleFAQ} />)}
                        keyExtractor={(item) => item._id}
                    />
                </View>
            </View>
        </View>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
    },
    supportTicketsView : {
        flex : 4,
    },
});





export default FAQ;