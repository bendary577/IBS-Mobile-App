import React,{useState, useEffect, useRef} from 'react';
import {SafeAreaView,TextInput, ScrollView, Image, ImageBackground, View, StyleSheet, Dimensions, Text, TouchableOpacity, I18nManager} from 'react-native';
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
import { getNotificationCategoriesAsync } from 'expo-notifications';
import CounterComponent from '../../components/sub-components/animations/CounterComponent';

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
        const [loading, setLoading] = useState(false);
        const {t} = useTranslation();
        const navigation = useNavigation();
        const ref_input_1 = useRef();
        const ref_input_2 = useRef();
        const ref_input_3 = useRef();
        const ref_input_4 = useRef();

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

    const goToFirstInput = () => {
        ref_input_1.current.focus();
    }

    const goToSecondInput = () => {
        ref_input_2.current.focus();
    }

    const goToThirdInput = () => {
        ref_input_3.current.focus();
    }

    const goToFourthInput = () => {
        ref_input_4.current.focus();
    }

    const firstCellKeyPressed = ({ nativeEvent: { key: keyValue } } ) => {
        if(keyValue == 'Backspace'){
            setFirstCellCode('');
        }else{
            setFirstCellCode(keyValue);
            goToSecondInput();
        }
    }

    const secondCellKeyPressed = ({ nativeEvent: { key: keyValue } } ) => {
        if(keyValue == 'Backspace'){
            setSecondCellCode('');
            goToFirstInput();
        }else{
            setSecondCellCode(keyValue);
            goToThirdInput();
        }
    }

    const thirdCellKeyPressed = ({ nativeEvent: { key: keyValue } } ) => {
        if(keyValue == 'Backspace'){
            setThirdCellCode('');
            goToSecondInput();
        }else{
            setThirdCellCode(keyValue);
            goToFourthInput();
        }
    }

    const fourthCellKeyPressed = ({ nativeEvent: { key: keyValue } } ) => {
        if(keyValue == 'Backspace'){
            setFourthCellCode('')
            goToThirdInput();
        }else{
            setFourthCellCode(keyValue);
        }
    }

    const handleConfirmPassword = async () => {
            let _code = firstCellCode + secondCellCode + thirdCellCode + fourthCellCode;
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
                <View style={styles.backgroundImage}>
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
                                <IBSConfirmationText value={firstCellCode} isFirst={true} reference={ref_input_1} onKeyPressed={firstCellKeyPressed} />
                                <IBSConfirmationText value={secondCellCode} isFirst={false} reference={ref_input_2} onKeyPressed={secondCellKeyPressed}/>
                                <IBSConfirmationText value={thirdCellCode} isFirst={false} reference={ref_input_3} onKeyPressed={thirdCellKeyPressed}/>
                                <IBSConfirmationText value={fourthCellCode} isFirst={false} reference={ref_input_4} onKeyPressed={fourthCellKeyPressed}/>
                            </View>
                            <IBSConfirmationButton active={confirm} onHandlePress={handleConfirmPassword} />
                        </View>
                    </View>
                    <CounterComponent handleSend={handleResetPassword}/>
                    </ScrollView>
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
    title : {
        alignItems : 'flex-start'
    }
});





export default ConfirmNewPassword;