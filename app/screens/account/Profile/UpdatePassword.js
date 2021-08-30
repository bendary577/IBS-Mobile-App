import React,{useEffect, useState} from 'react';
import {SafeAreaView,ScrollView, Text, View, StyleSheet, Dimensions} from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText'
import IBSButtonLargeRed from '../../../components/primitive-components/IBSButtonLargeRed';
import IBSPasswordText from '../../../components/primitive-components/IBSPasswordText';
import {updatePassword} from '../../../services/authentication';
import { withTranslation } from 'react-i18next';
import {useAuth} from '../../../contexts/authContext';
import {signout} from '../../../services/authentication';
import {useTranslation} from 'react-i18next';
import Loading from '../../../components/sub-components/general/Loading';


let {width, height} = Dimensions.get('window'); 

//------------------------ screen ---------------------
const UpdatePassword = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
    const [currentPasswordErrorMessage, setCurrentPasswordErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passwordConfirmationErrorMessage, setPasswordConfirmationErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [updating, setUpdating] = useState(false);
    const {setAuthenticated} = useAuth();
    const {t} = useTranslation();

    const logout = async () =>{
        setLoading(true);
        let response = await signout();
        if(response == "success"){
            setLoading(false);
            setAuthenticated(false);
        }
    }

    const clearInputs = () => {
        setMessage('');
        setPasswordErrorMessage('');
        setPasswordConfirmationErrorMessage('');
    }

    const handleCurrentPassword = (userInput) => {
        setCurrentPassword(userInput);
    }

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
            setUpdating(true);
            let data = {
                currentPassword : currentPassword,
                password : newPassword,
                passwordConfirmation : newPasswordConfirmation
            }
            let response = await updatePassword(data);
            if(response.status === 200 ){
                clearInputs();
                setMessage(t(`password_updated`))
                setTimeout(() => {
                    logout();
                }, 2000); 
            }else if (response.status === 422){
                response.data.errors.map( error => {
                    if(error.param === 'password'){
                        setPasswordErrorMessage(error.msg);
                    }else if(error.param === 'passwordConfirmation'){
                        setPasswordConfirmationErrorMessage(error.msg)
                    }
                });
            }else{
                setCurrentPasswordErrorMessage(response.data.error)
            }
        }else{
            setMessage(t(`passwords_not_identical`))
        }
        setUpdating(false);
    }


        return (
            updating === true ? 
            <Loading action={t(`loading`)} />
            :
            loading === true ? 
            <Loading action={t(`loggingOut`)}/>
            :
            <SafeAreaView style={styles.container}>
                <View style={styles.backgroundImage} >
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`set_new_password`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            { message !== '' ? <Text style={styles.errorMessage}>{message}</Text> : <></>}
                            { currentPasswordErrorMessage !== '' ? <Text style={styles.errorMessage}>{currentPasswordErrorMessage}</Text> : <></>}
                            <IBSPasswordText placeholder={t(`current_password`)} onChangeText={handleCurrentPassword}/>
                            { passwordErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordErrorMessage}</Text> : <></>}
                            <IBSPasswordText placeholder={t(`newPassword`)} onChangeText={handleNewPasswordChange}/>
                            { passwordConfirmationErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordConfirmationErrorMessage}</Text> : <></>}
                            <IBSPasswordText placeholder={t(`confirmPassword`)} onChangeText={handleNewPasswordConfirmationChange}/>
                            <IBSButtonLargeRed value={t(`update_password`)} action={false}  onHandlePress={handleUpdatePassword}/>
                        </View>
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
        marginTop : 15,
        justifyContent : 'center',
    },
    errorMessage : {
        color : 'red',
        fontWeight : 'bold',
        marginVertical : 2,
        padding : 3,
        paddingStart : 4,
        textAlign : 'center'
    },
});

export default withTranslation()(UpdatePassword);