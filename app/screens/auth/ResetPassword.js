import React,{Component} from 'react';
import {SafeAreaView, Image, ImageBackground, View, StyleSheet, Dimensions, Text, I18nManager} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import IBSInputText from '../../components/primitive-components/IBSInputText';
import IBSButtonLargeRed from '../../components/primitive-components/IBSButtonLargeRed';
import IBSButtonLargeGray from '../../components/primitive-components/IBSButtonLargeGray';
import BackButton from '../../components/sub-components/buttons/BackButton';
import getFlipForRTLStyle from '../../utils/utilFunctions';
import {requestResetPassword} from '../../services/authentication';
import { withTranslation } from 'react-i18next';

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/ResetPassword/reset-password.png';
let ibsImage = '../../assets/images/Login/ibs.png';
let ibsImageLeft = '../../assets/images/Login/ibs-2.png';

//------------------------ screen ---------------------
class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            phone : '',
            errorMessage : '',
        };
    }

    clearInputs = () => {
        this.setState({
            errorMessage : ''
        });
    }

    navigateLogin = () =>{
        this.clearInputs();
        this.props.navigation.navigate("Login");
    }

    handleChangeText = (userInput) => {
        this.setState({
            phone : userInput
        });
    }

    handleSendConfirmation = async () => {
        this.clearInputs();
        let data = {
            phone : this.state.phone
        }
        let response = await requestResetPassword(data);
        if(response.status === 200 ){
            setTimeout(()=>{ 
                this.props.navigation.navigate("ConfirmNewPassword", { phone : this.state.phone });
            }, 2000);
        }else if (response.status === 422){
            response.data.errors.map( error => {
                this.setState({
                    errorMessage : error.msg
                });
            });
        }else{
            this.setState({
                errorMessage : response.data.error
            });
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
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value={t(`reset`)} />
                            <TitleText value={t(`password`)} />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            {
                                this.state.errorMessage !== '' ? 
                                    <View style={{justifyContent:'center', alignItems:'center'}}>
                                        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
                                    </View>
                                :   
                                    <></>
                            }
                            <IBSInputText placeholder={t(`phone`)} onChangeText={this.handleChangeText}/>
                            <IBSButtonLargeRed value={t(`sendConfirmation`)} action={false} onHandlePress={this.handleSendConfirmation} />
                            <IBSButtonLargeGray value={t(`backtoLogin`)} action={false} onHandlePress={this.navigateLogin}/>
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
    errorMessage : {
        marginVertical : 5,
        color : 'red'
    }
});





export default withTranslation()(ResetPassword);