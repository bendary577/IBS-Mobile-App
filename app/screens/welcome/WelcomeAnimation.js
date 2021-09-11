import React,{useEffect} from 'react';
import {View, StyleSheet, Dimensions, ImageBackground, SafeAreaView} from 'react-native';
import AnimationComponent from '../../components/sub-components/animations/AnimationComponent';
import IBSButton from '../../components/primitive-components/IBSButton';
import AnimationIndicators from '../../components/sub-components/animations/AnimationIndicators';
import SkipButton from '../../components/sub-components/buttons/SkipButton';
import * as SecureStore from 'expo-secure-store';
import {useTranslation} from 'react-i18next';

let {width, height} = Dimensions.get('window'); 
let black = '../../assets/images/WelcomeAnimationScreen/black-right-3.png';

//------------------------ screen ---------------------
const WelcomeAnimation = (props) => {

    const {t} = useTranslation();

    useEffect(()=>{
        SecureStore.deleteItemAsync('language');
    }, []);

    const navigateToLogin = () => {
        props.navigation.navigate("Login");
    }

    const navigateToSignUp = () => {
        props.navigation.navigate("SignUp");
    }

	return (
	    <SafeAreaView style={styles.container}>
            {/*------------------------------ upper skip button ---------------------------- */}
            <View style={styles.skip}>
                <View>
                    <SkipButton onHandlePress={navigateToLogin} />
                </View>
           </View>

           {/*------------------------------ animation component ---------------------------- */}  
           <View style={styles.image}>
                <View style={styles.viewAnimation}>
                        <AnimationComponent />  
                </View>

                <View style ={styles.viewBtn}>
                    {/*------------------------------ animation indicators ---------------------------- */}
                    <View style={styles.start}>
                            <AnimationIndicators current="1"/>
                    </View> 

                    {/*------------------------------ get started button  ---------------------------- */}
                    <View style={styles.end}>
                        <IBSButton style={styles.btn} onHandlePress={navigateToSignUp} title={t(`getStartedButton`)} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop : 50,
        flexDirection : 'column'
    },
    skip : {
        flexDirection : 'row-reverse',
        width : width,
        alignItems : 'flex-start',
    },
    image : {
        width : width,
        height : height-40,
    },
    viewAnimation : {
        paddingTop : 5,
        height : height-280
    },
    circle : {
        width : 100,
        height : 100
    },
    viewBtn : {
        flexDirection : 'row',
        width : width,
        marginTop : 120,
        justifyContent : 'space-between',
    },
    start : {
        flex : 3,
        justifyContent : 'center',
    },
    end :  {
        flex : 3,
        alignItems : 'center',
    },
});





export default WelcomeAnimation;