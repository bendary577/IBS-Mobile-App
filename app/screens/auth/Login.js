import React,{useState} from 'react';
import {Text,SafeAreaView, Image,ScrollView, ImageBackground, View, StyleSheet, Dimensions, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSInputText from '../../components/primitive-components/IBSInputText';
import IBSPasswordText from '../../components/primitive-components/IBSPasswordText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import IBSButtonLargeGray from '../../components/primitive-components/IBSButtonLargeGray';
import NavigationButtons from '../../components/sub-components/buttons/NaviagationButtons';
import getFlipForRTLStyle from '../../utils/utilFunctions';
import {signIn} from '../../services/authentication';
import {useAuth} from '../../contexts/authContext';
import Loading from '../../components/sub-components/general/Loading';
import {useTranslation} from 'react-i18next';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';

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
        clearInputs();
        let data = {
            identityNumber : identityNumber,
            password : password
        }
        setLoading(true);
        let response = await signIn(data);
        if(response.status === 200 ){
            setLoading(false);
            setAuthenticated(true)
        }else if (response.status === 422){
            setLoading(false);
            response.data.errors.map( error => {
                if(error.param === 'password'){
                    setPasswordErrorMessage(error.msg)
                }else if (error.param === 'nationalIdentity'){
                    setNationalIdErrorMessage(error.msg)
                }
            });
        }else{
            setLoading(false);
            setErrorMessage(response.data.error)
        }
    }

    const handleCreateAccount = () =>{
        clearInputs();
        props.navigation.navigate("SignUp");
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
                <ImageBackground style={styles.backgroundImage} source={require(loginBackground)}>
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`loginWith`)} />
                            <TitleText value={t(`ibsaccount`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            { error !== '' ? <Text style={styles.errorMessage}>{error}</Text> : <></>}
                            <IBSInputText placeholder={t(`loginPlaceholder`)} onChangeText={handleOnChangeIdentificationNumber}/>
                            { passwordErrorMessage !== '' ? <Text style={styles.passwordErrorMessage}>{error}</Text> : <></>}
                            <IBSPasswordText placeholder={t(`passwordPlaceholder`)} hasChild={true} onChangeText={handleOnChangePassword}/>
                            <IBSButtonLargeRed value={t(`login`)} action={true} onHandlePress={handleLogin} />
                            <IBSButtonLargeGray value={t(`noAccount`)} action={true} actionText={t(`create`)} onHandlePress={handleCreateAccount}/>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.fixed}>
                            <NavigationButtons />
                        </View>
                    </View>
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
        alignItems : 'flex-end',
    },
    topImage : {
        width : 122,
        height : 155
    },
    backgroundImage : {
        width : width ,
        height : height-80
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
        right : I18nManager.isRTL ?  -100 : 80,
        marginTop : 40
    },
    errorMessage : {
        color : 'red',
        marginVertical : 2,
        textAlign : 'center'
    },
});





export default Login;