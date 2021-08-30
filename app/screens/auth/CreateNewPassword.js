import React,{useState, useEffect} from 'react';
import {SafeAreaView,ScrollView, Image, ImageBackground, View, StyleSheet, Dimensions, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import BackButton from '../../components/sub-components/buttons/BackButton';
import IBSPasswordText from '../../components/primitive-components/IBSPasswordText';
import {resetPassword} from '../../services/authentication';
import { withTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Loading from '../../components/sub-components/general/Loading';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';

//------------------------ screen ---------------------
const CreateNewPassword = ({route}) => {

    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const {t, i18n} = useTranslation();

    useEffect(()=>{
        console.log("phone is in update pass " + route.params.phone)
    }, [])

    const handleNewPasswordChange = (userInput) => {
        setNewPassword(userInput);
    }

    const handleNewPasswordConfirmationChange = (userInput) => {
        setNewPasswordConfirmation(userInput);
    }

    const validate = (newPassword, newPasswordConfirmation) => {
        if(newPassword === newPasswordConfirmation){
            return true
        }
        return false;
    }

    const handleUpdatePassword = async () => {
        let validation = validate(newPassword, newPasswordConfirmation);
        if(validation){
            let data = {
                phone : route.params.phone,
                password : newPassword,
                passwordConfirmation : newPasswordConfirmation
            }
            setLoading(true);
            let response = await resetPassword(data);
            if(response.status === 200){
                navigation.navigate("Login");
            }else{
                setError(response.data.error);
            }
        }
        setLoading(false);
    }

        return (
            loading === true ? 
            <Loading action={t(`loading`)} />
            :
            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.leftBackBtn}>
                        <BackButton />
                    </View>
                    <View style={styles.rightLogo}>
                        <Image style={styles.topImage} source={I18nManager.isRTL ? require(ibsImageLeft) : require(ibsImage)} />
                    </View>
                </View>
                <ImageBackground style={styles.backgroundImage} source={require(loginBackground)}>
                    <ScrollView>
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`createNew`)} />
                            <TitleText value={t(`password`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            <IBSPasswordText placeholder={t(`newPassword`)} onChangeText={handleNewPasswordChange}/>
                            <IBSPasswordText placeholder={t(`confirmPassword`)} onChangeText={handleNewPasswordConfirmationChange}/>
                            <IBSButtonLargeRed value={t(`update_password`)} action={false}  onHandlePress={handleUpdatePassword}/>
                        </View>
                    </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }


//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column'
    },
    top : {
        flex : 2,
        flexDirection : 'row'
    },
    leftBackBtn : {
        flex : 3,
        justifyContent : 'center',
        marginTop : 20,
        marginLeft : 20,
    },
    rightLogo : {
        flex : 3,
        alignItems : 'flex-end',
    },
    topImage : {
        width : 122,
        height : 155,
    },
    backgroundImage : {
        width : width,
        height : height-140,
    },
    middle : {
        flex : 4,
        paddingLeft : 20,
        marginTop: 20,
    },
    redLine : {
        height : 4,
        width : 30,
        backgroundColor : 'red',
        marginTop : 3
    },
    loginForm : {
        marginTop : 15
    },
});





export default CreateNewPassword;