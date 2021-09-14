import React, {useEffect}  from 'react';
import {SafeAreaView, Image,Text, View, StyleSheet, ScrollView, TouchableOpacity, I18nManager, Platform, StatusBar} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import PaymentCard from '../../components/sub-components/cards/PaymentCard';
import SmallMap from '../../components/sub-components/Maps/SmallMap';
import {primaryRedColor} from '../../config/colors';
import getFlipForRTLStyle from '../../utils/utilFunctions';
import {useTranslation} from 'react-i18next';
import IBSButtonLargeGray from '../../components/primitive-components/IBSButtonLargeGray';
import PTRView from 'react-native-pull-to-refresh';
import {refresh, textAlign} from '../../utils/utilFunctions';
let blackElipse = '../../assets/images/Home/black-elipse.png';

//------------------------ screen ---------------------
const Home = ({navigation}) => {

    const {t} = useTranslation();

    const navigateToFAQ = () => {
        //navigation.navigate("FAQ")
        //navigation.navigate('FAQStack', { screen: 'FAQ' });
        navigation.navigate('FAQStack', {
            screen: 'FAQ',
          });
          
    }

    const navigateToInformation = () => {
        navigation.navigate("Information")
    }

    useEffect(()=>{
        console.log("ios version is " + Platform.Version)
    }, [])
    


        return (
            <PTRView onRefresh={refresh} >
            <StatusBar backgroundColor={'white'} />
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    {/* -------------------------------------- payment card ----------------------------- */}
                    <View style={styles.paymentCard}>
                        <View style={[styles.blackElipseImage, getFlipForRTLStyle()]}>
                        </View>
                        <PaymentCard style={styles.card} navigate={navigation}/>
                    </View>
                    {/* -------------------------------------- about ibs -------------------------------- */}
                    <View style={styles.middleContainer}>
                        
                        <TouchableOpacity activeOpacity={0.8} style={styles.aboutIbs} onPress={()=>{navigation.navigate("AboutUs")}}>
                            <View style={styles.header}>
                                <View style={styles.card}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/icons/aboutUs/about.png')}
                                    />  
                                </View>
                                <View >
                                    <TitleText value={t(`aboutIBS`)}/>
                                </View>

                            </View>
                            
                            <View style={styles.description}>
                                <Text style={textAlign()}>{t(`aboutDesctiption`)}</Text>
                                <TouchableOpacity onPress={()=>{navigation.navigate("AboutUs")}}>
                                    <Text style={[styles.seeMoreTxt, textAlign()]}>{t(`seeMore`)}</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.separatorLine}></View>

                        {/* -------------------------------------- FAQ -------------------------------- */}
                        <TouchableOpacity activeOpacity={0.8} style={styles.aboutIbs} onPress={()=>{navigation.navigate("FAQ")}}>
                            <View style={styles.header}>
                                <View style={styles.card}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/icons/aboutUs/about.png')}
                                    />  
                                </View>
                                <View>
                                    <TitleText value={t(`faq`)}/>
                                </View>
                            </View>
                            
                            <View style={styles.description}>
                                <Text style={textAlign()}>{t(`faq_description`)}</Text>
                                <TouchableOpacity onPress={()=>{navigation.navigate("FAQ")}}>
                                    <Text style={[styles.seeMoreTxt, textAlign()]}>{t(`take_look`)}</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.separatorLine}></View>

                        {/* -------------------------------------- my information 
                        <TouchableOpacity activeOpacity={0.8} style={styles.aboutIbs} onPress={()=>{navigation.navigate("Information")}}>

                            <View style={styles.header}>
                                <View style={styles.card}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/icons/aboutUs/about.png')}
                                    />  
                                </View>
                                <View >
                                    <TitleText value={t(`latest_information`)}/>
                                </View>
                            </View>
                            
                            <View style={styles.description}>
                                <Text style={textAlign()}>{t(`information_description`)}</Text>
                                <TouchableOpacity onPress={navigateToInformation}>
                                    <Text style={[styles.seeInfoTxt, textAlign()]}>{t(`information_action`)}</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.separatorLine}></View>
                        -------------------------------- */}

                        {/* -------------------------------------- visit us -------------------------------- */}
                        <View activeOpacity={0.9} style={styles.visitUs} onPress={()=>{navigation.navigate("VisitUs")}}>
                            <View style={styles.header}>
                                <View style={styles.card}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/icons/VisitUs/location.png')}
                                    />  
                                </View>
                                <View>
                                    <TitleText value={t(`visitUs`)}/>
                                </View>
                            </View>
                            <View>
                                <SmallMap />
                            </View>
                        </View>
                        {/**-------------------     <BottomTabsNavigation />    -------------------- */}
                    </View>  
                </ScrollView>
            </SafeAreaView>
            </PTRView>
        );
}


//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
    },
    blackElipseImage : {
        width : 91,
        height : 175,
     },
    paymentCard : {
        flexDirection : 'row-reverse',
    },
    card : {
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : 2,
    },
    middleContainer : {
        padding : 10
    },
    aboutIbs : {
        marginTop : 10
    },
    visitUs : {
        marginTop : 20,
        marginBottom : 10
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent : 'flex-start',
        alignItems: 'center',
        marginBottom: 15,
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
    description : {
        margin : 5
    },
    seeMoreTxt : {
        marginTop : 15,
        fontSize : 12,
        fontWeight: 'bold',
        color: 'gray',
        textTransform: 'capitalize'
    },
    seeInfoTxt : {
        marginTop : 15,
        fontSize : 16,
        fontWeight: 'bold',
        color: '#b70000',
        textTransform: 'capitalize'
    },
    separatorLine : {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 2,
        marginVertical : '5%',
    },

});



export default Home;