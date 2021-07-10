import React, { useState , useEffect} from 'react';
import {SafeAreaView, Image, Text,ScrollView, View, StyleSheet} from 'react-native';
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
    const {t} = useTranslation();

    useEffect(() => {
        fetchInfo();
    }, [fetchInfo]);

    const fetchInfo = async () => {
        setLoading(true);
        let data = await getClientInformation();
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
            {/* ------------------------------------- header section ------------------------------------ */}
            <View style={styles.header}>
                <View style={styles.card}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/aboutUs/about.png')}
                    />  
                </View>
                <TitleText value="My Information"/>
            </View>

            {/* ------------------------------------- about text section ------------------------------------ */}
            <ScrollView>
                <View style={styles.supportTicketsView}>
                    {
                        information.map((info)=>{
                            return <InformationCard key={info._id} item={info} />
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
        flex : 4,
    },
});





export default Information;