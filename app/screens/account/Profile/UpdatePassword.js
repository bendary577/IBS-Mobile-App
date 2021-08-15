import React,{Component} from 'react';
import {SafeAreaView,Text, Image, ImageBackground, View, StyleSheet, Dimensions} from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText'
import IBSButtonLargeRed from '../../../components/primitive-components/IBSButtonLargeRed';
import BackButton from '../../../components/sub-components/buttons/BackButton';
import IBSPasswordText from '../../../components/primitive-components/IBSPasswordText';
import getFlipForRTLStyle from '../../../utils/utilFunctions';
import {updatePassword} from '../../../services/authentication';
import { withTranslation } from 'react-i18next';

let {width, height} = Dimensions.get('window'); 

//------------------------ screen ---------------------
class UpdatePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPassword : '',
            newPassword : '',
            newPasswordConfirmation : '',
            message : '',
            currentPasswordErrorMessage : '',
            passwordErrorMessage : '',
            passwordConfirmationErrorMessage : ''
         };
    }

    clearInputs = () => {
        this.setState({
            message : '',
            passwordErrorMessage : '',
            passwordConfirmationErrorMessage : ''
        });
    }

    handleCurrentPassword = (userInput) => {
        this.setState({
            currentPassword : userInput
        });
    }

    handleNewPasswordChange = (userInput) => {
        this.setState({
            newPassword : userInput
        });
    }

    handleNewPasswordConfirmationChange = (userInput) => {
        this.setState({
            newPasswordConfirmation : userInput
        });
    }

    validate = (newPassword, newPasswordConfirmation) => {
        if(newPassword === newPasswordConfirmation){
            return true
        }
        return false;
    }

    handleUpdatePassword = async () => {
        this.clearInputs();
        let validation = this.validate(this.state.newPassword, this.state.newPasswordConfirmation);
        if(validation){
            let data = {
                currentPassword : this.state.currentPassword,
                password : this.state.newPassword,
                passwordConfirmation : this.state.newPasswordConfirmation
            }
            let response = await updatePassword(data);
            if(response.status === 200 ){
                this.setState({
                    message : response.data.message
                });
            }else if (response.status === 422){
                response.data.errors.map( error => {
                    if(error.param === 'password'){
                        this.setState({
                            passwordErrorMessage : error.msg
                        });
                    }else if(error.param === 'passwordConfirmation'){
                        this.setState({
                            passwordConfirmationErrorMessage : error.msg
                        });
                    }
                });
            }else{
                this.setState({
                    currentPasswordErrorMessage : response.data.error
                });
            }
        }else{
            this.setState({message : t(`passwords_not_identical`)})
        }
    }

    render(){
        const { t } = this.props;
        const {message, passwordConfirmationErrorMessage, passwordErrorMessage, currentPasswordErrorMessage} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.backgroundImage} >
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`set_new`)} />
                            <TitleText value={t(`password`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            { message !== '' ? <Text style={styles.errorMessage}>{message}</Text> : <></>}
                            { currentPasswordErrorMessage !== '' ? <Text style={styles.errorMessage}>{currentPasswordErrorMessage}</Text> : <></>}
                            <IBSPasswordText placeholder={t(`current_password`)} onChangeText={this.handleCurrentPassword}/>
                            { passwordErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordErrorMessage}</Text> : <></>}
                            <IBSPasswordText placeholder={t(`newPassword`)} onChangeText={this.handleNewPasswordChange}/>
                            { passwordConfirmationErrorMessage !== '' ? <Text style={styles.errorMessage}>{passwordConfirmationErrorMessage}</Text> : <></>}
                            <IBSPasswordText placeholder={t(`confirmPassword`)} onChangeText={this.handleNewPasswordConfirmationChange}/>
                            <IBSButtonLargeRed value={t(`update_password`)} action={false}  onHandlePress={this.handleUpdatePassword}/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
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
        marginTop : 15
    },
    errorMessage : {
        color : 'red',
        marginVertical : 2,
        textAlign : 'center'
    },
});

export default withTranslation()(UpdatePassword);