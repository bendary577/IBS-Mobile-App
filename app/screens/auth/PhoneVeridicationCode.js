import React,{useState, useRef} from 'react';
import {SafeAreaView,TouchableOpacity, Image, ImageBackground, View, StyleSheet, Dimensions, Text, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import BackButton from '../../components/sub-components/buttons/BackButton';
import IBSConfirmationButton from '../../components/primitive-components/IBSConfirmationButton';
import IBSConfirmationText from '../../components/primitive-components/IBSConfirmationText';
import {useTranslation} from 'react-i18next';
import {verifyPhoneNumber, checkVerificationCode} from '../../services/authentication';
import Loading from '../../components/sub-components/general/Loading';
import {useAuth} from '../../contexts/authContext';
import CounterComponent from '../../components/sub-components/animations/CounterComponent';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/ResetPassword/reset-password.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';

//------------------------ screen ---------------------
const PhoneVerificationCode =()=> {

        const [firstCellCode, setFirstCellCode] = useState("");
        const [secondCellCode, setSecondCellCode] = useState("");
        const [thirdCellCode, setThirdCellCode] = useState("");
        const [fourthCellCode, setFourthCellCode] = useState("");
        const [confirm, setConfirm] = useState(true);
        const [error, setErrorMessage] = useState('');
        const [confirming, setConfirming] = useState(false);
        const [loading, setLoading] = useState(false);
        const [enableResend, setEnableResend] = useState(false);
        const {setAuthenticated} = useAuth();
        const {t} = useTranslation();
        const ref_input_1 = useRef();
        const ref_input_2 = useRef();
        const ref_input_3 = useRef();
        const ref_input_4 = useRef();

    
    React.useEffect(() => {
        verifyUserPhoneNumber();
    }, []);  
    
    //call the api endpoint to send verification code to the user
    const verifyUserPhoneNumber = async () => {
        setLoading(true);
        let response = await verifyPhoneNumber();
        if(response.status === 200){
            setEnableResend(false)
            setErrorMessage(response.data.message);
        }else{
            console.log("in fail verify phone")
            setEnableResend(true)
            response.data.error ? setErrorMessage(response.data.error) : setErrorMessage(t(`something_wrong`))
        }
        setLoading(false);
    }

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

    const handleVerificationCode = async () => {
        let _code = firstCellCode + secondCellCode + thirdCellCode + fourthCellCode;
        let data = {
            code : _code
        };
        setConfirming(true);
        let response = await checkVerificationCode(data);
        if(response.status === 200 ){
            setAuthenticated(true);
        }else{
            response.data.error ? setErrorMessage(response.data.error) : setErrorMessage(t(`something_wrong`))
        }
        setConfirming(false);
    }

        return (
            confirming === true ? 

            <Loading action={t(`checking_code`)}/>     

            :

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
                    <View style={styles.middle}>
                        <View style={{padding : 20, textAlign : 'flex-start'}}>
                            <TitleText value={t(`please_verify`)} />
                            <TitleText value={t(`phone_number`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        { error !== '' ? <Text style={styles.errorMessage}>{error}</Text> : <></>}
                        <View style={styles.loginForm}>
                            <View style={styles.confirmationInputs}>
                                <IBSConfirmationText value={firstCellCode} handleSubmitEditing={goToSecondInput} isFirst={true} reference={ref_input_1} onKeyPressed={firstCellKeyPressed}/>
                                <IBSConfirmationText value={secondCellCode} handleSubmitEditing={goToThirdInput} isFirst={false} reference={ref_input_2} onKeyPressed={secondCellKeyPressed}/>
                                <IBSConfirmationText value={thirdCellCode} handleSubmitEditing={goToFourthInput} isFirst={false} reference={ref_input_3} onKeyPressed={thirdCellKeyPressed}/>
                                <IBSConfirmationText value={fourthCellCode} handleSubmitEditing={()=>{}} isFirst={false} reference={ref_input_4} onKeyPressed={fourthCellKeyPressed}/>
                            </View>
                            <IBSConfirmationButton active={confirm} onHandlePress={handleVerificationCode} />
                        </View>
                    </View>
                    <CounterComponent handleSend={verifyUserPhoneNumber} />    
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
        paddingLeft : 20,

        //marginTop: 40,
    },
    redLine : {
        height : 4,
        width : 30,
        backgroundColor : 'red',
        marginTop : 3
    },
    loginForm : {
        //backgroundColor : 'red',
        marginTop : 20,
        width : '99%',  
        //paddingHorizontal : 30  
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
        marginVertical : 2,
        textAlign : 'center'
    },
});





export default PhoneVerificationCode;