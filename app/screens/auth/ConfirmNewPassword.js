import React,{useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Image, ImageBackground, View, StyleSheet, Dimensions, Text, TouchableOpacity, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import BackButton from '../../components/sub-components/buttons/BackButton';
import IBSConfirmationButton from '../../components/primitive-components/IBSConfirmationButton';
import IBSConfirmationText from '../../components/primitive-components/IBSConfirmationText';
import {checkResetPasswordCode} from '../../services/authentication';
import {useTranslation} from 'react-i18next';
import CountDown from 'react-native-countdown-component';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import {requestResetPassword} from '../../services/authentication';
import Loading from '../../components/sub-components/general/Loading';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/ResetPassword/reset-password.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';

//------------------------ screen ---------------------
const ConfirmNewPassword =({route})=> {

        const [firstCellCode, setFirstCellCode] = useState("");
        const [secondCellCode, setSecondCellCode] = useState("");
        const [thirdCellCode, setThirdCellCode] = useState("");
        const [fourthCellCode, setFourthCellCode] = useState("");
        const [confirm, setConfirm] = useState(false);
        const [error, setErrorMessage] = useState('');
        const [enableResend, setEnableResend] = useState(false);
        const [loading, setLoading] = useState(false);
        const {t, i18n} = useTranslation();
        const navigation = useNavigation();

    useEffect(()=>{
        console.log("phooooooone is " + route.params.phone)
    }, [])

    React.useEffect(() => {
        incrementCompleteInputs();
    }, [firstCellCode]);    

    React.useEffect(() => {
        incrementCompleteInputs();
    }, [secondCellCode]);    

    React.useEffect(() => {
        incrementCompleteInputs();
    }, [thirdCellCode]);    

    React.useEffect(() => {
        incrementCompleteInputs();
    }, [fourthCellCode]);   


    const incrementCompleteInputs = () => {
        if(firstCellCode.trim() !== "" && secondCellCode.trim() !== "" && thirdCellCode.trim() !== "" && fourthCellCode.trim() !== ""){
            setConfirm(true);  
        }else{
            setConfirm(false);  
        }
    }

    const handleFirstCell = (userInput) => {
        setFirstCellCode(userInput);
    }

    const handleSecondCell = (userInput) => {
        setSecondCellCode(userInput);
    }

    const handleThirdCell = (userInput) => {
        setThirdCellCode(userInput);
    }

    const handleFourthCell = (userInput) => {
        setFourthCellCode(userInput);
    }

    const handleConfirmPassword = async () => {
        let _code;
        if(I18nManager.isRTL){
            _code = fourthCellCode + thirdCellCode + secondCellCode +  + firstCellCode;
        }else{
            _code = firstCellCode + secondCellCode + thirdCellCode + fourthCellCode;
        }
        let data = {
            code : _code,
            phone : route.params.phone
        };
        setLoading(true);
        let response = await checkResetPasswordCode(data);
        if(response.status === 200){
            console.log(response.status.reset_token)
            SecureStore.setItemAsync('reset_token', response.data.reset_token);
            navigation.navigate("CreateNewPassword", { phone : route.params.phone});
        }else{
            response.data.error ? setErrorMessage(response.data.error) : setErrorMessage(t(`something_wrong`))
        }
        setLoading(false);
    }

    const handleResetPassword = async () => {
        console.log("request reset password")
        let data = {
            phone  : route.params.phone
        }
        setLoading(true);
        let response = await requestResetPassword(data);
        if(response.status === 200){
            console.log("test test" + response.status.data)
            setErrorMessage(response.data.message)
        }else{
            console.log("test error")
            console.log("data ts " + response.data.message)
            setErrorMessage(response.data.error)
        }
        setLoading(false);
    }

        return (
            loading === true ? 
            <Loading action={t(`loading`)}/>
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
                            <TitleText value={t(`enter`)} />
                            <TitleText value={t(`confirmationCode`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        { error !== '' ? <Text style={styles.errorMessage}>{error}</Text> : <></>}
                        <View style={styles.loginForm}>
                            <View style={styles.confirmationInputs}>
                                <IBSConfirmationText ChangeText={handleFirstCell} value={firstCellCode}/>
                                <IBSConfirmationText ChangeText={handleSecondCell} value={secondCellCode}/>
                                <IBSConfirmationText ChangeText={handleThirdCell} value={thirdCellCode}/>
                                <IBSConfirmationText ChangeText={handleFourthCell} value={fourthCellCode}/>
                            </View>
                            <IBSConfirmationButton active={confirm} onHandlePress={handleConfirmPassword} />

                            <View style={styles.confirmationText}>
                                <View style={{marginLeft : 10, color : 'black'}}>
                                    {confirm ?
                                        <View style={{flexDirection : 'row',width:200}}>
                                            <View style={{flex : 1}}>
                                                <Text>{t(`resendText`)}</Text>
                                            </View>
                                            <View style={{flex:1, alignItems:'flex-start'}}>
                                                <CountDown  
                                                    until={65}
                                                    onFinish={() => setEnableResend(true)}
                                                    digitStyle={{width:20,height:15}}
                                                    digitTxtStyle={{color: 'black', fontSize:14}}
                                                    separatorStyle={{color: 'black', fontSize : 14}}
                                                    onPress={() => alert('hello')}
                                                    timeToShow={['M', 'S']}
                                                    size={25}
                                                    timeLabels={{m: null, s: null}}
                                                    showSeparator
                                                    />
                                            </View>
                                        </View>
                                            : 
                                        <Text>{t(`recieveCode`)}</Text>        
                                    }
                                </View>
                                <TouchableOpacity> 
                                    {confirm ?
                                     enableResend ? <TouchableOpacity onPress={handleResetPassword}><Text style={styles.rightText}>{t(`resend`)}</Text></TouchableOpacity>  : <Text style={styles.rightTextInactive}>{t(`resend`)}</Text> 
                                     :
                                     <TouchableOpacity onPress={handleResetPassword}><Text style={styles.rightText}>{t(`resend`)}</Text></TouchableOpacity>
                                    }
                                </TouchableOpacity>
                            </View>
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
        width : width ,
        height : height-120,
    },
    middle : {
        flex : 4,
        paddingLeft : 20,
        marginTop: 40,
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
    confirmationInputs : {
        flexDirection : 'row',
        marginBottom : 10,
        justifyContent : 'space-evenly',
        width : "90%"
    },
    confirmationText : {
        flexDirection :'row',
        justifyContent : 'space-between',
        width : "90%",
        marginTop : 15
    },
    leftText : {
        color : 'black',
        marginLeft : 10
    },
    rightText : {
        color : 'red'
    },
    rightTextInactive : {
        color : 'gray'
    },
    errorMessage : {
        color : 'red',
        fontWeight : 'bold',
        padding : 2,
        marginTop : 3,
        textAlign : 'center'
    },
});





export default ConfirmNewPassword;