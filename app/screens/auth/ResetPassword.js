import React,{Component} from 'react';
import {SafeAreaView, Image, ImageBackground, View, StyleSheet, Dimensions, Text} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSInputText from '../../components/primitive-components/IBSInputText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import IBSButtonLargeGray from '../../components/primitive-components/IBSButtonLargeGray';
import BackButton from '../../components/sub-components/buttons/BackButton';
import { t } from '../../languages/i18Manager';
import getFlipForRTLStyle from '../../utils/utilFunctions';
import {forgetPassword} from '../../services/authentication';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/ResetPassword/reset-password.png';
let ibsImage = '../../assets/images/Login/ibs.png';


//------------------------ screen ---------------------
class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            phone : '',
            message : '',
        };
    }

    navigateLogin = () =>{
        this.props.navigation.navigate("Login");
    }

    handleChangeText = (userInput) => {
        this.setState({
            phone : userInput
        });
    }

    handleSendConfirmation = async () => {
        let data = {
            phone : this.state.phone
        }
        let responseMessage = await forgetPassword(data);
        console.log("in reset password" + responseMessage);
        this.setState({
            message : responseMessage
        });
        setTimeout(()=>{ 
            this.props.navigation.navigate("ConfirmNewPassword");
        }, 2000);
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
                            <TitleText value={t(`auth:reset`)} />
                            <TitleText value={t(`auth:password`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            <IBSInputText placeholder={t(`auth:loginPlaceholder`)} onChangeText={this.handleChangeText}/>
                            <IBSButtonLargeRed value={t(`auth:sendConfirmation`)} action={false} onHandlePress={this.handleSendConfirmation} />
                            <IBSButtonLargeGray value={t(`auth:backtoLogin`)} action={false} onHandlePress={this.navigateLogin}/>
                            {
                                this.state.message !== '' ? 
                                    <View style={{justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{marginTop : 20, color : 'red'}}>{this.state.message}</Text>
                                    </View>
                                :   
                                    <></>
                            }
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
});





export default ResetPassword;