import React, { useState , useEffect} from 'react';
import {Image, SafeAreaView,Dimensions,ScrollView,TouchableOpacity, Text, View, FlatList, StyleSheet} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import {primaryRedColor} from '../../config/colors';
import {useTranslation} from 'react-i18next';
import {getFAQ} from '../../services/api_requests';
import Loading from '../../components/sub-components/general/Loading';
import NoContent from '../../components/sub-components/general/NoContent';
import FAQCard from '../../components/sub-components/cards/FAQCard';
import IBSSearchBar from '../../components/sub-components/inputs/IBSSearchBar';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import Accordion from '@dooboo-ui/native-accordion';
import { List } from 'react-native-paper';


let see = '../../assets/icons/Login/View.png';
let add = '../../assets/icons/Home/add.png';
let remove = '../../assets/icons/Home/remove.svg';
//------------------------ screen ---------------------
const FAQ = ({navigation}) => {

    const [faqs, setFAQ] = useState(null);
    const [loading , setLoading] = useState([]);
    const [refreshing , setRefreshing] = useState(false);
    const [isMiddleItem , setIsMiddleItem] = useState(false);
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
        setLoading(false);
        setRefreshing(false);
    }

    const handleRefresh = () => {
        setRefreshing(true)
        fetchFAQ();
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
        <>
            <SafeAreaView style={styles.container}>

            <View style={{ margin : 10}}>
                <View style={{marginVertical : 10}}>
                    <Text style={{fontSize:16, fontWeight:'bold', textAlign :'left'}}>{t(`faq_screen_title`)}</Text>
                </View>

                <View style={{marginBottom : 15}}>
                    <Text style={{textAlign :'left'}}>{t(`faq_screen_description`)}</Text>
                </View>

                <View style={{marginBottom : 10, alignItems : 'center'}}>
                    <IBSSearchBar />
                </View>

                <View>
                    <Text style={{fontSize:18, fontWeight:'bold', textAlign :'left'}}>{t(`faq`)}</Text>
                </View>
            </View>
                {/* ------------------------------------- about text section ------------------------------------ */}
                    <View style={{flex : 3}}>
                        {/*}
                        <FlatList
                            data={faqs}
                            renderItem={({item})=>( <FAQCard key={item._id.toString()} item={item} />)}
                            keyExtractor={(item) => item._id.toString()}
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                        */}
                        
                            <List.Section style={{borderTopWidth : 1, borderTopColor : '#a2a3a2'}}>
                            <ScrollView>
                                {
                                    faqs.map((faq)=>{
                                        return(
                                        <List.Accordion
                                            id={faq._id}
                                            style={{borderBottomWidth : 1, borderBottomColor : '#a2a3a2'}}
                                            title="what is kaspuss"
                                            titleStyle={{fontSize:16, fontWeight : 'bold'}}
                                            descriptionStyle={{justifyContent : 'flex-start',backgroundColor : 'blue', alignItems : 'flex-start'}}
                                            right={props => <Image style={{width:8, height:8,color : 'red'}}  source={require(add)}/>}>
                                            <List.Item title="accordion content example" />
                                        </List.Accordion>
                                        )
                                    })
                                }
                                                        </ScrollView>
                            </List.Section>

                    </View>
            </SafeAreaView>
            <View style={{backgroundColor : 'white', borderTopWidth:1, borderTopColor : '#d9d9d9', paddingLeft : 20, paddingRight : 20, paddingBottom : 20}}>
                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                    <View style={{marginVertical : 10}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>{t(`still_need_help`)}</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{t(`send_message`)}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        backgroundColor : 'white'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical : 20,
        marginLeft : 10,
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
    button: {
        flexDirection : 'row',
        justifyContent : 'center',
        backgroundColor: '#EC253C',
        width: "93%",
        height: 45,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom : 10,
        borderRadius : 20
    },
    buttonText : {
        color : 'white',
        fontSize : 20
    }
});





export default FAQ;