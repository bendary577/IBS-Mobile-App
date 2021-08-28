import React,{useState} from 'react';
import {SafeAreaView, Image, ImageBackground, View, StyleSheet, Dimensions, Text, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import BackButton from '../../components/sub-components/buttons/BackButton';
import IBSConfirmationButton from '../../components/primitive-components/IBSConfirmationButton';
import IBSConfirmationText from '../../components/primitive-components/IBSConfirmationText';
import {useTranslation} from 'react-i18next';
import {verifyPhoneNumber, checkVerificationCode} from '../../services/authentication';
import Loading from '../../components/sub-components/general/Loading';
import {useAuth} from '../../contexts/authContext';

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
        const [confirm, setConfirm] = useState(false);
        const [error, setErrorMessage] = useState('');
        const [loading, setLoading] = useState(false);
        const {setAuthenticated} = useAuth();
        const {t} = useTranslation();

    
    React.useEffect(() => {
        verifyUserPhoneNumber();
    }, []);  
    
    //call the api endpoint to send verification code to the user
    const verifyUserPhoneNumber = async () => {
        let response = await verifyPhoneNumber();
        if(response.status === 200){
            setErrorMessage(t(`code_sent`));
        }else{
            response.data.error ? setErrorMessage(response.data.error) : setErrorMessage(t(`something_wrong`))
        }
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
        let _code = firstCellCode + secondCellCode + thirdCellCode + fourthCellCode;
        let data = {
            code : _code
        };
        setLoading(true);
        let response = await checkVerificationCode(data);
        setLoading(false);
        if(response.status === 200 ){
            setAuthenticated(true);
        }else{
            response.data.error ? setErrorMessage(response.data.error) : setErrorMessage(t(`something_wrong`))
        }
    }

        return (
            loading === true ? 

            <Loading action={t(`checking_code`)}/>

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
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`please_verify`)} />
                            <TitleText value={t(`phone_number`)} />
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
        marginVertical : 2,
        textAlign : 'center'
    },
});





export default PhoneVerificationCode;