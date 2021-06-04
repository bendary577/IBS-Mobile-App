import React,{useState} from 'react';
import {SafeAreaView, Image, ImageBackground, View, StyleSheet, Dimensions, Text, TouchableOpacity, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import BackButton from '../../components/sub-components/buttons/BackButton';
import IBSConfirmationButton from '../../components/primitive-components/IBSConfirmationButton';
import IBSConfirmationText from '../../components/primitive-components/IBSConfirmationText';
import {resetPassword} from '../../services/authentication';
import {useTranslation} from 'react-i18next';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/ResetPassword/reset-password.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';

//------------------------ screen ---------------------
const ConfirmNewPassword =()=> {

        const [firstCellCode, setFirstCellCode] = useState('');
        const [secondCellCode, setSecondCellCode] = useState('');
        const [thirdCellCode, setThirdCellCode] = useState('');
        const [fourthCellCode, setFourthCellCode] = useState('');
        const [completedInputs, setCompletedInputs] = useState(0);
        const [confirm, setConfirm] = useState(false);
        const [resendEnabled, setResendEnabled] = useState(false);
        const {t} = useTranslation();

    const incrementCompleteInputs = () => {
        console.log("hamada : " + firstCellCode)
        if(firstCellCode.trim() !== "" && secondCellCode.trim() !== "" && thirdCellCode.trim() !== "" && fourthCellCode.trim() !== ""){
            setConfirm(true);  
        }else{
            setConfirm(false);  
        }
    }

    const handleFirstCell = (userInput) => {
        console.log("first : " + userInput)
        console.log("first cell : " + firstCellCode)
        setFirstCellCode(userInput);
        console.log("first cell after  : " + firstCellCode)
        //incrementCompleteInputs();
    }

    const handleSecondCell = (userInput) => {
        console.log("second : " + userInput)
        console.log("second cell : " + secondCellCode)
        setSecondCellCode(userInput);
        incrementCompleteInputs();
    }

    const handleThirdCell = (userInput) => {
        console.log("third : " + userInput)
        console.log("third cell : " + thirdCellCode)
        setThirdCellCode(userInput);
        incrementCompleteInputs();
    }

    const handleFourthCell = (userInput) => {
        console.log("fourth : " + userInput)
        console.log("fourth cell : " + fourthCellCode)
        setFourthCellCode(userInput);
        incrementCompleteInputs();
    }

    const handleConfirmPassword = () => {
        let _code = firstCellCode + secondCellCode + thirdCellCode + fourthCellCode;
        let data = {
            code : _code
        };
        resetPassword(data);
    }


        return (
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
                            <TitleText value={t(`enter`)} />
                            <TitleText value={t(`confirmationCode`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            <View style={styles.confirmationInputs}>
                                <IBSConfirmationText ChangeText={handleFirstCell} value={firstCellCode}/>
                                <IBSConfirmationText ChangeText={handleSecondCell} value={secondCellCode}/>
                                <IBSConfirmationText ChangeText={handleThirdCell} value={thirdCellCode}/>
                                <IBSConfirmationText ChangeText={handleFourthCell} value={fourthCellCode}/>
                            </View>
                            <IBSConfirmationButton active={confirm} onHandlePress={handleConfirmPassword} />
                            <View style={styles.confirmationText}>
                                <View>
                                    <Text style={styles.leftText}>
                                        {confirm ? "resend after 01:05" : t(`recieveCode`)}
                                    </Text>
                                </View>
                                <TouchableOpacity> 
                                    {confirm ?
                                     <Text style={styles.rightTextInactive}>{t(`Resend`)}</Text> 
                                     :
                                     <Text style={styles.rightText}>{t(`resend`)}</Text>
                                    }
                                </TouchableOpacity>
                            </View>
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
    }
});





export default ConfirmNewPassword;