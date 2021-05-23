import React,{Component} from 'react';
import {SafeAreaView, Image, ImageBackground, View, StyleSheet, Dimensions} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSInputText from '../../components/primitive-components/IBSInputText';
import IBSPasswordText from '../../components/primitive-components/IBSPasswordText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import IBSButtonLargeGray from '../../components/primitive-components/IBSButtonLargeGray';
import NavigationButtons from '../../components/sub-components/buttons/NaviagationButtons';
import {t} from '../../languages/i18Manager';
import getFlipForRTLStyle from '../../utils/utilFunctions';
import {signIn} from '../../services/authentication';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';

//------------------------ screen ---------------------
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            username : '',
            password : ''
        };
    }

    handleLogin = () =>{
        console.log("signin screen 1")
        signIn(this.state.username, this.state.password);
        //this.props.navigation.navigate("Home");
        console.log("signin screen 2")
    }

    handleCreateAccount = () =>{
        this.props.navigation.navigate("SignUp");
    }

    handleOnChangeUsername = (userInput) => {
        this.setState({
            username : userInput
        });
    }

    handleOnChangePassword = (userInput) => {
        this.setState({
            password : userInput
        });
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <Image style={[styles.topImage, getFlipForRTLStyle()]} source={require(ibsImage)} />
                </View>
                <ImageBackground style={styles.backgroundImage} source={require(loginBackground)}>
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`auth:loginWith`)} />
                            <TitleText value={t(`general:ibsaccount`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            <IBSInputText placeholder={t(`auth:loginPlaceholder`)} onChangeText={this.handleOnChangeUsername}/>
                            <IBSPasswordText placeholder={t(`auth:passwordPlaceholder`)} hasChild={true} onChangeText={this.handleOnChangePassword}/>
                            <IBSButtonLargeRed value={t(`auth:login`)} action={true} onHandlePress={this.handleLogin} />
                            <IBSButtonLargeGray value={t(`auth:noAccount`)} action={true} actionText={t(`auth:create`)} onHandlePress={this.handleCreateAccount}/>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.fixed}>
                            <NavigationButtons />
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
        alignItems : 'flex-end',
    },
    topImage : {
        width : 122,
        height : 155
    },
    backgroundImage : {
        width : width ,
        height : height-100
        //width : 360,
        //height : 500
    },
    middle : {
        flex : 4,
        paddingLeft : 20,
        marginTop: 40,
        //height : 400,
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
    bottom : {
        flex : 1,
        alignItems : 'flex-start'
    },
});





export default Login;