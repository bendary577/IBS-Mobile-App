import React,{Component} from 'react';
import {SafeAreaView,ScrollView, Image, ImageBackground, View, StyleSheet, Dimensions, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import BackButton from '../../components/sub-components/buttons/BackButton';
import IBSPasswordText from '../../components/primitive-components/IBSPasswordText';
import getFlipForRTLStyle from '../../utils/utilFunctions';
import {resetPassword} from '../../services/authentication';
import { withTranslation } from 'react-i18next';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';

//------------------------ screen ---------------------
class CreateNewPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newPassword : '',
            newPasswordConfirmation : '',
            error : '',
         };
         console.log("phone is " + this.props.route.phone)
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
        let validation = this.validate(this.state.newPassword, this.state.newPasswordConfirmation);
        if(validation){
            let data = {
                phone : this.props.route.phone,
                password : this.state.newPassword,
                passwordConfirmation : this.state.newPasswordConfirmation
            }
            let response = await resetPassword(data);
            if(response.status === 200){
                setTimeout(()=>{ 
                    this.props.navigation.navigate("Login");
                }, 1000);
            }else{
                this.setState(response.data.error)  
            }
        }
    }

    render(){
        const { t } = this.props;
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
                    <ScrollView>
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`createNew`)} />
                            <TitleText value={t(`password`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            <IBSPasswordText placeholder={t(`newPassword`)} onChangeText={this.handleNewPasswordChange}/>
                            <IBSPasswordText placeholder={t(`confirmPassword`)} onChangeText={this.handleNewPasswordConfirmationChange}/>
                            <IBSButtonLargeRed value={t(`update_password`)} action={false}  onHandlePress={this.handleUpdatePassword}/>
                        </View>
                    </View>
                    </ScrollView>
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





export default withTranslation()(CreateNewPassword);