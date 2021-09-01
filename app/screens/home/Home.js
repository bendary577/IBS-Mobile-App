import React from 'react';
import {SafeAreaView, Image,Text, View, StyleSheet, ScrollView, TouchableOpacity, I18nManager, Platform} from 'react-native';
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
        navigation.navigate("FAQ")
    }

    const navigateToInformation = () => {
        navigation.navigate("Information")
    }
    


        return (
            <PTRView onRefresh={refresh} >
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    {/* -------------------------------------- payment card ----------------------------- */}
                    <View style={styles.paymentCard}>
                        <Image style={[styles.blackElipseImage, getFlipForRTLStyle()]} source={require(blackElipse)} />
                        <PaymentCard style={styles.card} navigate={navigation}/>
                    </View>
                    {/* -------------------------------------- about ibs -------------------------------- */}
                    <View style={styles.middleContainer}>
                        
                        <TouchableOpacity style={styles.aboutIbs} onPress={()=>{navigation.navigate("AboutUs")}}>
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
                        <TouchableOpacity style={styles.aboutIbs} onPress={()=>{navigation.navigate("FAQ")}}>
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

                        {/* -------------------------------------- my information -------------------------------- */}
                        <TouchableOpacity style={styles.aboutIbs} onPress={()=>{navigation.navigate("Information")}}>

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

                        {/* -------------------------------------- visit us -------------------------------- */}
                        <TouchableOpacity style={styles.visitUs} onPress={()=>{navigation.navigate("VisitUs")}}>
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
                        </TouchableOpacity>
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
        marginTop : 70
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
        marginTop : 5,
        fontSize : 16
    },
    seeInfoTxt : {
        marginTop : 5,
        fontSize : 16,
        color : 'black',
        fontWeight : 'bold'
    },
    separatorLine : {
        borderBottomColor: '#c4c3c2',
        borderBottomWidth: 2,
        marginVertical : '3%',
    },

});



export default Home;