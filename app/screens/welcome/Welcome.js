import React,{useEffect, useState} from 'react';
import {Text, Platform, SafeAreaView, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, I18nManager} from 'react-native';
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
        setTimeout(()=>{
            props.navigation.navigate('WelcomeAnimation');
        },
        2000);
    }, []);


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
                            {/*
                            <View >
                                <Text style={styles.selectLang}>Select App</Text>
                                <Text style={styles.selectLang}>Language</Text>
                            </View>
                            <View style={styles.lang}>
                                <TouchableOpacity onPress={()=>{setEnglishLanguage()}} >
                                    <Text style={styles.textLang}>English</Text>
                                </TouchableOpacity >
                                <Text style={styles.textLang}>\</Text>
                                <TouchableOpacity onPress={()=>{setArabicLanguage()}} >
                                    <Text style={styles.textLang}>??????????????</Text>
                                </TouchableOpacity >
                            </View>
                            */}
                        </View>
                </ImageBackground>   
            </View>
        </SafeAreaView>
	);
}

let rtlValue = null;
if(I18nManager.isRTL === true){
    if(Platform.OS == 'android'){
        rtlValue = -40;
    }else{
        rtlValue = 200;
    }
}else{
    if(Platform.OS == 'android'){
        rtlValue = -40;
    }else{
        rtlValue = -20
    }
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
        //marginLeft : 30
        right : rtlValue,
        marginBottom : 70
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