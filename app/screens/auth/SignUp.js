import React,{useState} from 'react';
import {SafeAreaView, Image, ImageBackground,Text, View, StyleSheet, Dimensions, I18nManager, ScrollView} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSInputText from '../../components/primitive-components/IBSInputText';
import IBSPasswordText from '../../components/primitive-components/IBSPasswordText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import IBSButtonLargeGray from '../../components/primitive-components/IBSButtonLargeGray';
import NavigationButtons from '../../components/sub-components/buttons/NaviagationButtons';
import { RadioButton } from 'react-native-paper';
import { signupRequest } from '../../services/authentication';
import Loading from '../../components/sub-components/general/Loading';
import { useNavigation } from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../contexts/authContext';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';

//------------------------ screen ---------------------
const SignUp = () => {

    const navigation = useNavigation();
    const [checked, setChecked] = useState('unchecked');
    const [nationalId, setNationalId] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [nationalIdErrorMessage, setNationalIdErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [passwordConfirmationErrorMessage, setPasswordConfirmationErrorMessage] = useState('');
    const {setAuthenticated} = useAuth();
    const {t} = useTranslation();

    const validate = () => {
        if(password !== '' && passwordConfirm !='' && password === passwordConfirm && checked === 'checked'){
            handleSignup();
        }else{
            setErrorMessage(t(`validate_inputs`));
        }
    }

    const handleSignup = async () =>{
        //clearInputs();
        let data = {
          identityNumber : nationalId,
          phone : phone,
          password : password,
          passwordConfirmation : passwordConfirm
        };

        setLoading(true);
        let response = await signupRequest(data);
        if(response.status === 200 ){
            response.data.data.user.isVerified === true ? setAuthenticated(true) : navigatePhoneVerification();
        }else if (response.status === 422){
            response.data.errors.map( error => {
                if(error.param === 'phone'){
                    setPhoneErrorMessage(error.msg)
                }else if(error.param === 'password'){
                    setPasswordErrorMessage(error.msg)
                }else if(error.param === 'passwordConfirmation'){
                    setPasswordConfirmationErrorMessage(error.msg)
                }
            })
        }else{
            setErrorMessage(response.data.error)
        }
        setLoading(false);
    }

    const clearInputs = () => {
        setErrorMessage('');
        setNationalIdErrorMessage('');
        setPasswordErrorMessage('');
        setPasswordConfirmationErrorMessage('');
        setPhoneErrorMessage('');
    }

    const navigateLogin = () =>{
        clearInputs();
        navigation.navigate("Login");
    }

    const navigatePhoneVerification = () =>{
        clearInputs();
        navigation.navigate("PhoneVerification");
    }

    const handleOnChangeNationalId = (userInput) => {
        setNationalId(userInput);
    }

    const handleOnChangePhone = (userInput) => {
        setPhone(userInput);
    }

    const handleOnChangePassword = (userInput) => {
        setPassword(userInput);
    }

    const handleOnChangePasswordConfirm = (userInput) => {
        setPasswordConfirm(userInput)
    }
        return (

            loading === true ? 

            <Loading action={t(`registering`)}/>
            :
            <SafeAreaView style={styles.container}>
                <ScrollView>
                {/* --------------------------- top section [title] -------------------- */}
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <View style={styles.title}>
                            <TitleText value={t(`createNew`)} />
                            <TitleText value={t(`ibsaccount`)} />
                            <View style={styles.redLine}></View>
                        </View>
                    </View>
                    <View style={styles.topRight}>
                        <Image style={styles.topImage} source={I18nManager.isRTL ? require(ibsImageLeft) : require(ibsImage)} />
                    </View>
                </View>
                 {/* ---------------------------  registration form ----------------------- */}
                <ImageBackground style={styles.backgroundImage} source={require(loginBackground)}>
                        <View style={styles.middle}>
                            <View style={styles.loginForm}>
                                { errorMessage !== '' ? <Text style={styles.errorMessage}>{errorMessage}</Text> : <></>}
                                { nationalIdErrorMessage !== '' ? <Text style={styles.nationalIdErrorMessage}>{errorMessage}</Text> : <></>}
                                <IBSInputText placeholder={t(`loginPlaceholder`)} onChangeText={handleOnChangeNationalId}/>
                                { phoneErrorMessage !== '' ? <Text style={styles.errorMessage}>{phoneErrorMessage}</Text> : <></>}
                                <IBSInputText placeholder={t(`phone`)} onChangeText={handleOnChangePhone}/>
                                { passwordErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordErrorMessage}</Text> : <></>}
                                <IBSPasswordText placeholder={t(`setPassword`)} onChangeText={handleOnChangePassword}/>
                                { passwordConfirmationErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordConfirmationErrorMessage}</Text> : <></>}
                                <IBSPasswordText placeholder={t(`confirmPassword`)} onChangeText={handleOnChangePasswordConfirm}/>
                                <View style={styles.radioView}>
                                    <View style={styles.RadioButton}>
                                        <RadioButton value="agree" 
                                                     status={checked}  
                                                     onPress={() => {setChecked(checked === 'checked' ? 'unchecked' : 'checked')}}  
                                                     style={styles.radio}
                                                     color="red" />
                                    </View>
                                    <View style={styles.termsText}>
                                        <Text style={styles.leftText}>{t(`agree`)}</Text>
                                        <Text style={styles.rightText}>{t(`terms`)}</Text>
                                    </View>
                                </View>
                                <IBSButtonLargeRed value={t(`createAccount`)} action={false} onHandlePress={validate} />
                                <IBSButtonLargeGray value={t(`haveAccount`)} action={true} actionText={t(`login`)} onHandlePress={navigateLogin}/>
                            </View>
                        </View>
                    <View style={styles.bottom}>
                        <View style={styles.fixed}>
                            <NavigationButtons />
                        </View>
                    </View>
                </ImageBackground>
                </ScrollView>
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
    topLeft : {
        flex : 3,
        justifyContent :'flex-end',
        alignItems : 'center'
    },
    topRight : {
        flex : 3,
        alignItems : 'flex-end'
    },
    topImage : {
        width : 122,
        height : 155
    },
    backgroundImage : {
        width : width ,
        height : height+90
    },
    middle : {
        flex : 4,
        paddingLeft : 20,
    },
    redLine : {
        height : 4,
        width : 30,
        backgroundColor : 'red',
        marginTop : 3
    },
    loginForm : {
        height : '80%',
        marginVertical : 20,
    },
    radioView : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        marginVertical : 8
    },
    RadioButton : {
        marginTop : -8
    },
    termsText : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        marginLeft : 5,
    },
    rightText : {
        marginLeft : 4,
        color : 'red'
    },
    bottom : {
        flex : 1,
        right : I18nManager.isRTL ?  -80 : 80,
        marginTop : 10,
    },
    errorMessage : {
        color : 'red',
        marginVertical : 2,
        textAlign : 'center'
    },
    
});





export default SignUp;