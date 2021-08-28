import React, { useState } from 'react'
import {StyleSheet, Text, View, Image , TouchableOpacity, I18nManager} from 'react-native'
import {signout} from '../../../services/authentication';
import { useNavigation } from '@react-navigation/native';
import {useAuth} from '../../../contexts/authContext';
import Loading from '../general/Loading';
import {useTranslation} from 'react-i18next';
import * as Updates from "expo-updates";
import * as SecureStore from 'expo-secure-store';

let arabicIcon = '../../../assets/icons/Profile/arabic.png';
let englishIcon = '../../../assets/icons/Profile/english.png';
let logoutIcon = '../../../assets/icons/Profile/logout.png';

const ProfileInfoSection = () => {

    const navigation = useNavigation();
    const {setAuthenticated} = useAuth();
    const {t, i18n} = useTranslation();
    [loading, setLoading] = useState(false);

    const logout = async () =>{
        setLoading(true);
        let response = await signout();
        if(response == "success"){
            setLoading(false);
            setAuthenticated(false);
        }
    }


    const changeLanguage = () => {
        i18n
        .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
        .then(() => {
          I18nManager.forceRTL(i18n.language === 'ar');
          SecureStore.setItemAsync('lang', i18n.language);
          Updates.reloadAsync();
          //RNRestart.Restart();
        }).catch((error) => {
            console.log('error ' + error.message);
        });
    }


    return (

        loading === true ? 

        <Loading action={t(`loggingOut`)}/>
        :
        <View style={styles.conatiner}>
            <TouchableOpacity style={styles.view} onPress={()=>{changeLanguage()}}>
                <Image style={styles.icon} source={I18nManager.isRTL ? require(englishIcon) : require(arabicIcon)} />
                <Text style={styles.text}>{t(`changeLanguage`)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.view} onPress={()=>{logout()}}>
                <Image style={styles.icon} source={require(logoutIcon)} />
                <Text style={styles.textRed}>{t(`signout`)}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
        padding : 20
    },
    view : {
        flexDirection : 'row',
        marginBottom : 10
    },
    icon : {
        width : 30,
        height : 30
    },
    text : {
        fontSize : 18,
        marginLeft : 10
    },  
    textRed : {
        fontSize : 18,
        color : 'red',
        marginLeft : 10
    }

})

export default ProfileInfoSection;
