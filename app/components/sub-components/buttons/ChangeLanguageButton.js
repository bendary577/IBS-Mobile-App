import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import * as Updates from "expo-updates";
import * as SecureStore from 'expo-secure-store';

let english = '../../../assets/icons/Login/englishLangIcon.png';
let arabic = '../../../assets/icons/Login/arabicLangIcon.png';

const ChangeLanguageButton = (props) => {

    const {t, i18n} = useTranslation();

    const setEnglishLanguage = (lang) =>{
         i18n
         .changeLanguage(lang, () => {
             I18nManager.forceRTL(false);
             SecureStore.setItemAsync('language', 'true');
             SecureStore.setItemAsync('lang', lang);
             Updates.reloadAsync();
         })
     }
 
     const setArabicLanguage = (lang) =>{
          i18n
          .changeLanguage(lang, () => {
              I18nManager.forceRTL(true);
              SecureStore.setItemAsync('language', 'true');
              SecureStore.setItemAsync('lang', lang);
              Updates.reloadAsync();
          })
    }

    return (
        <TouchableOpacity style={styles.button} onPress={I18nManager.isRTL ? () => {setEnglishLanguage()} : ()=> {setArabicLanguage()}}>
            <Image style={styles.icon} source={I18nManager.isRTL ? require(english) : require(arabic) } />
            <Text style={styles.text}> {t(`language`)} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        flexDirection : 'column',
        alignItems : 'center',
        margin : 5
    },
    text: {
        fontSize : 12
    },
    icon : {
        width : 30,
        height : 30
    },
})

export default ChangeLanguageButton;
 