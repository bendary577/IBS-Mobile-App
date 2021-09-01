import React,{useState} from 'react';
import {Text,SafeAreaView, Image, ImageBackground, View, StyleSheet, Dimensions, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSInputText from '../../components/primitive-components/IBSInputText';
import IBSPasswordText from '../../components/primitive-components/IBSPasswordText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import IBSButtonLargeGray from '../../components/primitive-components/IBSButtonLargeGray';
import NavigationButtons from '../../components/sub-components/buttons/NaviagationButtons';
import {signIn} from '../../services/authentication';
import {useAuth} from '../../contexts/authContext';
import Loading from '../../components/sub-components/general/Loading';
import {useTranslation} from 'react-i18next';
import * as SecureStore from 'expo-secure-store';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';
let loginBottom = '../../assets/images/Login/BottomBlackLtr.png';
let loginBottomRtl = '../../assets/images/Login/bottomBlackRtl.png';

//------------------------ screen ---------------------
const Login = (props) => {

    const [identityNumber, setIdentityNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setErrorMessage] = useState('');
    const [nationalIdErrorMessage, setNationalIdErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const {setAuthenticated} = useAuth();
    const {t} = useTranslation();

    const clearInputs = () => {
        setErrorMessage('');
        setNationalIdErrorMessage('');
        setPasswordErrorMessage('');
    }

    const handleLogin = async () =>{
        let data = {
            identityNumber : identityNumber,
            password : password
        }
        setLoading(true);
        //let response = await signIn(data);
        let response = {status : 200}
        if(response.status === 200 ){
            clearInputs();
            response.data.data.user.isVerified === true ? setAuthenticated(true) : handleVerifyPhone();
        }else if (response.status === 422){
            response.data.errors.map( error => {
                if(error.param === 'password'){
                    setPasswordErrorMessage(error.msg)
                }else if (error.param === 'nationalIdentity'){
                    setNationalIdErrorMessage(error.msg)
                }
            });
        }else{
            response.data.error === null || response.data.error ? setErrorMessage(response.data.error) : setErrorMessage(t(`something_wrong`))
        }
        setLoading(false);
    }

    const validate = () => {
        identityNumber === '' ? setNationalIdErrorMessage(t(`provide_id`)) : setNationalIdErrorMessage('');
        password === '' ? setPasswordErrorMessage(t(`provide_password`)) : setPasswordErrorMessage('');
        if(nationalIdErrorMessage === '' && passwordErrorMessage === ''){
            handleLogin();
        }
    }

    const handleCreateAccount = () =>{
        clearInputs();
        props.navigation.navigate("SignUp");
    }

    const handleVerifyPhone = () =>{
        clearInputs();
        props.navigation.navigate("PhoneVerification");
    }

    const handleOnChangeIdentificationNumber = (userInput) => {
       setIdentityNumber(userInput)
    }

    const handleOnChangePassword = (userInput) => {
       setPassword(userInput)
    }

        return (

            loading === true ? 

            <Loading action={t(`logging`)}/>
            :
            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.topImage} source={I18nManager.isRTL ? require(ibsImageLeft) : require(ibsImage)} />
                </View>
                <View style={{flex : 5, flexDirection : 'column'}}>
                    <View style={{flex : 4, flexDirection : 'column', height : '100%',zIndex : 999, width : '95%', marginStart : 20}}>
                            { error !== '' ? <Text style={styles.errorMessage}>{error}</Text> : <></>}
                            { nationalIdErrorMessage !== '' ? <Text style={styles.errorMessage}>{nationalIdErrorMessage}</Text> : <></>}
                            <IBSInputText placeholder={t(`loginPlaceholder`)} onChangeText={handleOnChangeIdentificationNumber}/>
                            { passwordErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordErrorMessage}</Text> : <></>}
                            <IBSPasswordText placeholder={t(`passwordPlaceholder`)} hasChild={true} onChangeText={handleOnChangePassword}/>
                            <IBSButtonLargeRed value={t(`login`)} action={true} onHandlePress={validate} />
                            <IBSButtonLargeGray value={t(`noAccount`)} action={true} actionText={t(`create`)} onHandlePress={handleCreateAccount}/>
                    </View>
                    <View style={{flex : 3, flexDirection : 'row'}}>
                        <View style={{flex : 4, marginTop : '5%', justifyContent : 'center', alignItems : 'flex-start', padding : 20}}>
                                <NavigationButtons />
                            </View>
                            {/*
                            <View style={{flex : 2, justifyContent : 'center', alignItems : 'flex-end'}}>
                                <Image style={{width : 125, height : '115%'}} source={I18nManager.isRTL ? require(loginBottomRtl) : require(loginBottom)} />
                            </View>
                            */}
                    </View>
                </View>
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
        alignItems : 'flex-end',
    },
    topImage : {
        width : 122,
        height : 155
    },
    backgroundImage : {
        width : width ,
        height : height-50
        //width : 360,
        //height : 500
    },
    middle : {
        flex : 4,
        paddingLeft : 20,
        marginTop: 40,
        //height : 400,
    },
    redLine : {
        height : 4,
        width : 30,
        backgroundColor : 'red',
        marginTop : 3
    },
    loginForm : {
        marginTop : 20,
    },
    bottom : {
        flex : 1,
        right : I18nManager.isRTL ?  -80 : 80,
        marginTop : 10
    },
    errorMessage : {
        color : 'red',
        fontWeight : 'bold',
        padding : 2,
        marginVertical : 2,
        textAlign : 'center'
    },
});


export default Login;