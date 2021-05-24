import React,{Component} from 'react';
import {SafeAreaView, Image, ImageBackground,Text, View, StyleSheet, Dimensions} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSInputText from '../../components/primitive-components/IBSInputText';
import IBSPasswordText from '../../components/primitive-components/IBSPasswordText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import IBSButtonLargeGray from '../../components/primitive-components/IBSButtonLargeGray';
import NavigationButtons from '../../components/sub-components/buttons/NaviagationButtons';
import { ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import i18n, { t } from '../../languages/i18Manager';
import { signup } from '../../services/authentication';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';

//------------------------ screen ---------------------
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked : 'unchecked',
            nationalId : '',
            phone : '',
            password : '',
            passwordConfirm : '',
         };
    }

    getFlipForRTLStyle = () => {
        if (!i18n.isRTL) { return {}; };
        return {
            transform: [{
                scaleX: -1,
            }],
        };
    }

    setChecked = () => {
        this.setState({
            checked : this.state.checked === 'checked' ? 'unchecked' : 'checked'
        })
    }

    handleSignup = () =>{
        console.log(this.state.nationalId + this.state.phone + this.state.password);
        let data = {
          identityNumber : this.state.nationalId,
          password : this.state.phone,
          phone : this.state.password
        };
        signup(data);
        //this.props.navigation.navigate("Home");
    }

    navigatHome = () =>{
        this.props.navigation.navigate("Home");
    }

    navigateLogin = () =>{
        this.props.navigation.navigate("Login");
    }

    handleOnChangeNationalId = (userInput) => {
        this.setState({
            nationalId : userInput
        });
    }

    handleOnChangePhone = (userInput) => {
        this.setState({
            phone : userInput
        });
    }

    handleOnChangePassword = (userInput) => {
        this.setState({
            password : userInput
        });
    }

    handleOnChangePasswordConfirm = (userInput) => {
        this.setState({
            passwordConfirm : userInput
        });
    }
    
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <View style={styles.title}>
                            <TitleText value={t(`auth:createNew`)} />
                            <TitleText value={t(`general:ibsaccount`)} />
                            <View style={styles.redLine}></View>
                        </View>
                    </View>
                    <View style={styles.topRight}>
                        <Image style={[styles.topImage, this.getFlipForRTLStyle()]} source={require(ibsImage)} />
                    </View>
                </View>
                <ImageBackground style={styles.backgroundImage} source={require(loginBackground)}>
                        <View style={styles.middle}>
                            <View style={styles.loginForm}>
                                <IBSInputText placeholder={t(`auth:loginPlaceholder`)} onChangeText={this.handleOnChangeNationalId}/>
                                <IBSInputText placeholder={t(`auth:phone`)} onChangeText={this.handleOnChangePhone}/>
                                <IBSPasswordText placeholder={t(`auth:setPassword`)} onChangeText={this.handleOnChangePassword}/>
                                <IBSPasswordText placeholder={t(`auth:confirmPassword`)} onChangeText={this.handleOnChangePasswordConfirm}/>
                                <View style={styles.radioView}>
                                    <View style={styles.RadioButton}>
                                        <RadioButton value="agree" 
                                                     status={this.state.checked}  
                                                     onPress={() => { this.setChecked() }}  
                                                     style={styles.radio}
                                                     color="red" />
                                    </View>
                                    <View style={styles.termsText}>
                                        <Text style={styles.leftText}>{t(`auth:agree`)}</Text>
                                        <Text style={styles.rightText}>{t(`auth:terms`)}</Text>
                                    </View>
                                </View>
                                <IBSButtonLargeRed value={t(`auth:createAccount`)} action={false} onHandlePress={this.handleSignup} />
                                <IBSButtonLargeGray value={t(`auth:haveAccount`)} action={true} actionText={t(`auth:login`)} onHandlePress={this.navigateLogin}/>
                            </View>
                        </View>
                    <View style={styles.bottom}>
                        <View style={styles.fixed}>
                            <NavigationButtons />
                        </View>
                    </View>
                </ImageBackground>
                </ScrollView>
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
    topLeft : {
        flex : 3,
        justifyContent :'flex-end',
        alignItems : 'center'
    },
    topRight : {
        flex : 3,
        alignItems : 'flex-end'
    },
    topImage : {
        width : 122,
        height : 155
    },
    backgroundImage : {
        width : width ,
        height : height
    },
    middle : {
        flex : 4,
        paddingLeft : 20,
    },
    redLine : {
        height : 4,
        width : 30,
        backgroundColor : 'red',
        marginTop : 3
    },
    loginForm : {
        marginTop : 20,
        marginBottom : 20
    },
    radioView : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        marginVertical : 8
    },
    RadioButton : {
        marginTop : -8
    },
    termsText : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        marginLeft : 5,
    },
    rightText : {
        marginLeft : 4,
        color : 'red'
    },
    bottom : {
        flex : 1,
        alignItems : 'flex-start',
        paddingTop : 40
    },
});





export default SignUp;