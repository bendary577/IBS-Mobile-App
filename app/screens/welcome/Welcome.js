import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';

let welcome = '../../assets/images/Welcome/welcome7.png';
let black = '../../assets/images/Welcome/black.png';
let width = Dimensions.get('window').width; 

//------------------------ screen ---------------------
const Welcome = ({navigation}) => {
	return (
	    <SafeAreaView  style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.topImage} source={require(black)} />
            </View>
            <View style={styles.bottom}>
                <ImageBackground style={styles.image} source={require(welcome)}>

                {/* -------------------------------- get started title ------------------------------ */}
                    <View style={styles.viewTitle}>
                        <TitleText value="Get started with your" />
                        <TitleText value="IBS account" />
                    </View>

                    {/* -------------------------------- select language ------------------------------ */}
                        <View style={styles.viewLang}>
                            <View >
                                <Text style={styles.selectLang}>Select App</Text>
                                <Text style={styles.selectLang}>Language</Text>
                            </View>
                            <View style={styles.lang}>
                                <TouchableOpacity onPress={()=>{ navigation.navigate("WelcomeAnimation")}} >
                                    <Text style={styles.textLang}>English</Text>
                                </TouchableOpacity >
                                <Text style={styles.textLang}>\</Text>
                                <TouchableOpacity onPress={()=>{ navigation.navigate("ContactUsUnAuth")}}>
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