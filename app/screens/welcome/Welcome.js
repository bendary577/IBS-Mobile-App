import React, {useState} from 'react';
import {Text, SafeAreaView, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, NativeModules,ActivityIndicator } from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import i18n, { t } from '../../languages/i18Manager';
import Loading from '../../components/sub-components/general/Loading';
import {RNRestart} from 'react-native-restart';
import getFlipForRTLStyle from '../../utils/utilFunctions';

let welcome = '../../assets/images/Welcome/welcome7.png';
let black = '../../assets/images/Welcome/black.png';
let width = Dimensions.get('window').width; 

//------------------------ screen ---------------------
const Welcome = ({navigation}) => {

    const [loadingLanguage, setLanguage] = useState(false);

    const setLang = (lang) =>{
        setLanguage(true);
        let response = i18n.changeLanguage(lang);
        console.log("response is " + response)
        if(response == true){
            setLanguage(false);
            navigation.navigate("WelcomeAnimation")
        }
       // RNRestart.Restart();
       // NativeModules.DevSettings.reload();
    }

	return (

        loadingLanguage === true ?
            <Loading action={t(`general:loading`)} />
        :

	    <SafeAreaView  style={styles.container}>
            <View style={styles.top}>
                <Image style={[styles.topImage, getFlipForRTLStyle()]} source={require(black)} />
            </View>
            <View style={styles.bottom}>
                <ImageBackground style={styles.image} source={require(welcome)}>

                {/* -------------------------------- get started title ------------------------------ */}
                    <View style={styles.viewTitle}>
                        <TitleText value={t(`welcome:getStarted`)} />
                        <TitleText value={t(`welcome:ibsAccount`)} />
                    </View>

                    {/* -------------------------------- select language ------------------------------ */}
                        <View style={styles.viewLang}>
                            <View >
                                <Text style={styles.selectLang}>Select App</Text>
                                <Text style={styles.selectLang}>Language</Text>
                            </View>
                            <View style={styles.lang}>
                                <TouchableOpacity onPress={()=>{setLang('en')}} >
                                    <Text style={styles.textLang}>English</Text>
                                </TouchableOpacity >
                                <Text style={styles.textLang}>\</Text>
                                <TouchableOpacity onPress={()=>{setLang('ar')}} >
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
        marginLeft : 25
    },
    viewLang : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 65,
    },
    selectLang : {
        fontSize : 16,
        fontWeight : 'bold'
    },
    lang : {
        flexDirection : 'row',
        paddingTop : 10,
        marginLeft : 40
    },
    textLang : {
        padding : 3,
        color : 'white',
        fontSize : 16
    }
});

export default Welcome;