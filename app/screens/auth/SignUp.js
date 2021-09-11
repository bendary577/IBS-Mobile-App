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
import { TouchableOpacity } from 'react-native';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground3.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';
let loginBottom = '../../assets/images/Login/BottomBlackLtr.png';
let loginBottomRtl = '../../assets/images/Login/bottomBlackRtl.png';
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
    const [privacyErrorMessage, setPrivacyErrorMessage] = useState('');
    const {setAuthenticated} = useAuth();
    const {t} = useTranslation();

    const validate = () => {
        nationalId === '' ? setNationalIdErrorMessage(t(`provide_id`)) : setNationalIdErrorMessage('');
        phone === '' ?  setPhoneErrorMessage(t(`provide_phone`)) :  setPhoneErrorMessage('')
        phone.length != 11 ?  setPhoneErrorMessage(t(`phone_length_error`)) :  setPhoneErrorMessage('')
        password === '' ? setPasswordErrorMessage(t(`provide_password`)) : setPasswordErrorMessage('');
        passwordConfirm === '' ? setPasswordConfirmationErrorMessage(t(`confirm_your_password`)) : setPasswordConfirmationErrorMessage('');
        password !== passwordConfirm ? setPasswordConfirmationErrorMessage(t(`passwords_not_identical`)) : setPasswordConfirmationErrorMessage('');
        checked !== 'checked' ? setPrivacyErrorMessage(t(`check_privacy_policy`)) : setPrivacyErrorMessage('');
        if(nationalIdErrorMessage === '' && passwordErrorMessage === '' && phoneErrorMessage === '' && passwordConfirmationErrorMessage === '' && privacyErrorMessage === ''){
            handleSignup();
        }
    }

    const handleSignup = async () =>{
        let data = {
          identityNumber : nationalId,
          phone : phone,
          password : password,
          passwordConfirmation : passwordConfirm
        };
        setLoading(true);
        let response = await signupRequest(data);
        if(response.status === 201 ){
            navigateLogin();
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

    const navigatePrivacyPolicy = () =>{
        navigation.navigate("PrivacyPolicy");
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
                <View>
                    <View style={{flex : 1, flexDirection : 'column'}}>
                        <View style={{flex : 4, flexDirection : 'column' , padding : 10, zIndex : 999}}>
                            <View style={{ height : '100%', width : '95%', marginStart : 15}}>
                                { errorMessage !== '' ? <Text style={styles.errorMessage}>{errorMessage}</Text> : <></>}
                                { nationalIdErrorMessage !== '' ? <Text style={styles.errorMessage}>{nationalIdErrorMessage}</Text> : <></>}
                                <IBSInputText placeholder={t(`loginPlaceholder`)} onChangeText={handleOnChangeNationalId}/>
                                { phoneErrorMessage !== '' ? <Text style={styles.errorMessage}>{phoneErrorMessage}</Text> : <></>}
                                <IBSInputText placeholder={t(`phone`)} onChangeText={handleOnChangePhone}/>
                                { passwordErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordErrorMessage}</Text> : <></>}
                                <IBSPasswordText placeholder={t(`setPassword`)} onChangeText={handleOnChangePassword}/>
                                { passwordConfirmationErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordConfirmationErrorMessage}</Text> : <></>}
                                <IBSPasswordText placeholder={t(`confirmPassword`)} onChangeText={handleOnChangePasswordConfirm}/>
                                { privacyErrorMessage !== '' ? <Text style={styles.errorMessage}>{privacyErrorMessage}</Text> : <></>}
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
                                        <TouchableOpacity onPress={navigatePrivacyPolicy}><Text style={styles.rightText}>{t(`terms`)}</Text></TouchableOpacity>
                                    </View>
                                </View>
                                <IBSButtonLargeRed value={t(`createAccount`)} action={false} onHandlePress={validate} />
                                <IBSButtonLargeGray value={t(`haveAccount`)} action={true} actionText={t(`login`)} onHandlePress={navigateLogin}/>
                            </View>
                        </View>
                        <View style={{flex : 2, flexDirection : 'row'}}>
                            <View style={{padding:30}}>
                                <NavigationButtons />
                            </View>
                            {/*
                            <View style={{flex : 2, justifyContent : 'center', alignItems : 'flex-end'}}>
                                <Image style={{width : 125, height : '220%'}} source={I18nManager.isRTL ? require(loginBottomRtl) : require(loginBottom)} />
                            </View>
                            */}
                        </View>
                    </View>
                </View>
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
        height : height
    },
    middle : {
        flex : 1,
        paddingLeft : 20,
    },
    redLine : {
        height : 4,
        width : 30,
        backgroundColor : 'red',
        marginTop : 3
    },
    loginForm : {
       

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
        flexDirection : 'column',
        justifyContent : 'flex-end',
        alignItems : 'flex-start',

    },
    fixed : {
        marginStart : I18nManager.isRTL ? '45%' : '2%',
        marginEnd : I18nManager.isRTL ? '2%' : '45%',
        alignItems : 'flex-end',
        marginBottom : '15%'
    },
    errorMessage : {
        color : 'red',
        fontWeight : 'bold',
        marginVertical : 2,
        textAlign : 'center'
    },
    
});





export default SignUp;