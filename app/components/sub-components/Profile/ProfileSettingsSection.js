import React from 'react'
import {StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {t} from '../../../languages/i18Manager';
import {signout} from '../../../services/authentication';
import { useNavigation } from '@react-navigation/native';

let arabicIcon = '../../../assets/icons/Profile/arabic.png';
let logoutIcon = '../../../assets/icons/Profile/logout.png';

const ProfileInfoSection = () => {

    const navigation = useNavigation();

    const logout = () =>{
        signout();
        navigation.navigate("Login");
    }

    return (
        <View style={styles.conatiner}>
            <TouchableOpacity style={styles.view}>
                <Image style={styles.icon} source={require(arabicIcon)} />
                <Text style={styles.text}>{t(`profile:changeLanguage`)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.view} onPress={logout()}>
                <Image style={styles.icon} source={require(logoutIcon)} />
                <Text style={styles.textRed}>{t(`profile:signout`)}</Text>
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
