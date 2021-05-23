import React,{Component} from 'react';
import {SafeAreaView, Image, ImageBackground, View, StyleSheet, Dimensions} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import BackButton from '../../components/sub-components/buttons/BackButton';
import IBSPasswordText from '../../components/primitive-components/IBSPasswordText';
import { t } from '../../languages/i18Manager';
import getFlipForRTLStyle from '../../utils/utilFunctions';
import {updatePassword} from '../../services/authentication';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';


//------------------------ screen ---------------------
class CreateNewPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newPassword : '',
            newPasswordConfirmation : ''
         };
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

    handleUpdatePassword = () => {
        let validation = validate(this.state.newPassword, this.state.newPasswordConfirmation);
        if(validation){
            let data = {
                currentPassword : this.state.newPassword,
                newPassword : this.state.newPasswordConfirmation
            }
            updatePassword(data);
        }
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.leftBackBtn}>
                        <BackButton />
                    </View>
                    <View style={styles.rightLogo}>
                        <Image style={[styles.topImage, getFlipForRTLStyle()]} source={require(ibsImage)} />
                    </View>
                </View>
                <ImageBackground style={styles.backgroundImage} source={require(loginBackground)}>
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`auth:createNew`)} />
                            <TitleText value={t(`auth:password`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            <IBSPasswordText placeholder={t(`auth:newPassword`)} onChangeText={this.handleNewPasswordChange}/>
                            <IBSPasswordText placeholder={t(`auth:confirmPassword`)} onChangeText={this.handleNewPasswordConfirmationChange}/>
                            <IBSButtonLargeRed value={t(`authchangePassword`)} action={false}  onHandlePress={this.handleUpdatePassword}/>
                        </View>
                    </View>
                </ImageBackground>
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
});





export default CreateNewPassword;