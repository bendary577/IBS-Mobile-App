import React,{useEffect, useState} from 'react';
import {Text, SafeAreaView, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import Loading from '../../components/sub-components/general/Loading';
//import { Updates } from 'expo';
import * as Updates from "expo-updates";
import {RNRestart} from 'react-native-restart';
import {useTranslation} from 'react-i18next';
import * as SecureStore from 'expo-secure-store';
import getFlipForRTLStyle from '../../utils/utilFunctions';

let welcome = '../../assets/images/Welcome/welcome7.png';
let welcomeRight = '../../assets/images/Welcome/welcome8.png';
let black = '../../assets/images/Welcome/black.png';
let width = Dimensions.get('window').width; 

//------------------------ screen ---------------------
const Welcome = (props) => {

    const {t, i18n} = useTranslation();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const language = SecureStore.getItemAsync('language');
        if(language !== null){
            setTimeout(() => {
                props.navigation.navigate('WelcomeAnimation');
            }, 200000000);
        }
    }, []);

    const setLang = () =>{
       //setLang(true);
        i18n
        .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
        .then(() => {
          I18nManager.forceRTL(i18n.language === 'ar');
          //RNRestart.Restart();
          //Updates.reloadFromCache();
          SecureStore.setItemAsync('language', 'true');
          SecureStore.setItemAsync('lang', i18n.language);
          Updates.reloadAsync();
        }).catch((error) => {
            console.log('error ' + error.message);
        });
    }

	return (

        loading === true ? 

        <Loading action={t(`loading`)}/>

        :

	    <SafeAreaView  style={styles.container}>
            <View style={styles.top}>
                <Image style={[styles.topImage, getFlipForRTLStyle()]} source={require(black)} />
            </View>
            <View style={styles.bottom}>
                <ImageBackground style={styles.image} source={ I18nManager.isRTL ? require(welcomeRight) : require(welcome)}>

                {/* -------------------------------- get started title ------------------------------ */}
                    <View style={styles.viewTitle}>
                        <TitleText value={t(`getStarted`)} /> 
                        <TitleText value={t(`ibsAccount`)} /> 
                    </View>

                    {/* -------------------------------- select language ------------------------------ */}
                        <View style={styles.viewLang}>
                            <View >
                                <Text style={styles.selectLang}>Select App</Text>
                                <Text style={styles.selectLang}>Language</Text>
                            </View>
                            <View style={styles.lang}>
                                <TouchableOpacity onPress={()=>{setLang()}} >
                                    <Text style={styles.textLang}>English</Text>
                                </TouchableOpacity >
                                <Text style={styles.textLang}>\</Text>
                                <TouchableOpacity onPress={()=>{setLang()}} >
                                    <Text style={styles.textLang}>العربية</Text>
                                </TouchableOpacity >
                            </View>
                        </View>
                </ImageBackground>   
            </View>
        </SafeAreaView>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "column"
    },
    top : {
        flex : 0.5,
        alignItems : 'flex-end',
    },
    topImage : {
        width : 100,
        height : 110
    },
    bottom : {
        flex : 5.5,
        flexDirection : 'column'
    }, 
    image : {
        
        width : width + 35,
        height : "125%",
        justifyContent : "center",
    },
    viewTitle : {
        padding : 10,
        marginTop : 30,
        //marginLeft : 30
        right : -40 
    },
    viewLang : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 65,
    },
    selectLang : {
        fontSize : 16,
        fontWeight : 'bold',
        left : 30
    },
    lang : {
        flexDirection : 'row',
        paddingTop : 10,
        marginLeft : 40
    },
    textLang : {
        padding : 3,
        color : 'white',
        fontSize : 16,
        left : 30,
        //textDecorationLine: 'underline'
    }
});

export default Welcome;