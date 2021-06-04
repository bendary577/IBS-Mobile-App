import React from 'react';
import {SafeAreaView, Image,Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import PaymentCard from '../../components/sub-components/cards/PaymentCard';
import SmallMap from '../../components/sub-components/Maps/SmallMap';
import {primaryRedColor} from '../../config/colors';
import getFlipForRTLStyle from '../../utils/utilFunctions';
import {useTranslation} from 'react-i18next';

let blackElipse = '../../assets/images/Home/black-elipse.png';


//------------------------ screen ---------------------
const Home = ({navigation}) => {

    const {t} = useTranslation();

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    {/* -------------------------------------- payment card ----------------------------- */}
                    <View style={styles.paymentCard}>
                        <Image style={[styles.blackElipseImage, getFlipForRTLStyle()]} source={require(blackElipse)} />
                        <PaymentCard style={styles.card} navigate={navigation}/>
                    </View>
                    {/* -------------------------------------- about ibs -------------------------------- */}
                    <View style={styles.middleContainer}>
                        <View style={styles.aboutIbs}>
                            <View style={styles.header}>
                                <View style={styles.card}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/icons/aboutUs/about.png')}
                                    />  
                                </View>
                                <TitleText value={t(`aboutIBS`)}/>
                            </View>
                            
                            <View style={styles.description}>
                                <Text>{t(`aboutDesctiption`)}</Text>
                                <TouchableOpacity onPress={()=>{navigation.navigate("AboutUs")}}>
                                    <Text style={styles.seeMoreTxt}>{t(`seeMore`)}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* -------------------------------------- visit us -------------------------------- */}
                        <View style={styles.visitUs}>
                            <View style={styles.header}>
                                <View style={styles.card}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/icons/VisitUs/location.png')}
                                    />  
                                </View>
                                <TouchableOpacity onPress={()=>{navigation.navigate("VisitUs")}}>
                                    <TitleText value={t(`visitUs`)}/>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <SmallMap />
                            </View>
                        </View>
                        {/**-------------------     <BottomTabsNavigation />    -------------------- */}
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
    blackElipseImage : {
        width : 91,
        height : 175,
        marginTop : 70
     },
    paymentCard : {
        flexDirection : 'row-reverse',
        marginBottom : 10,
        height : 180,
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
});



export default Home;