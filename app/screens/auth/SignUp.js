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

let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/Login/loginBackground.png';
let ibsImage = '../../assets/images/Login/ibs.png';

//------------------------ screen ---------------------
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked : 'unchecked'
         };
    }

    setChecked = () => {
        this.setState({
            checked : this.state.checked === 'checked' ? 'unchecked' : 'checked'
        })
    }

    navigatHome = () =>{
        this.props.navigation.navigate("Home");
    }

    navigateLogin = () =>{
        this.props.navigation.navigate("Login");
    }
    
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <View style={styles.title}>
                            <TitleText value="Create New" />
                            <TitleText value="IBS Account" />
                            <View style={styles.redLine}></View>
                        </View>
                    </View>
                    <View style={styles.topRight}>
                        <Image style={styles.topImage} source={require(ibsImage)} />
                    </View>
                </View>
                <ImageBackground style={styles.backgroundImage} source={require(loginBackground)}>
                        <View style={styles.middle}>
                            <View style={styles.loginForm}>
                                <IBSInputText placeholder="National ID or Passport Number"/>
                                <IBSInputText placeholder="Phone Number"/>
                                <IBSPasswordText placeholder="Set Password"/>
                                <IBSPasswordText placeholder="Confirm Password"/>
                                <View style={styles.radioView}>
                                    <View style={styles.RadioButton}>
                                        <RadioButton value="agree" 
                                                     status={this.state.checked}  
                                                     onPress={() => { this.setChecked() }}  
                                                     style={styles.radio}
                                                     color="red" />
                                    </View>
                                    <View style={styles.termsText}>
                                        <Text style={styles.leftText}>I agree to the</Text>
                                        <Text style={styles.rightText}>terms & privacy policy</Text>
                                    </View>
                                </View>
                                <IBSButtonLargeRed value="Create Account" action={false} onHandlePress={this.navigatHome} />
                                <IBSButtonLargeGray value="Don't have an account?" action={true} actionText="Login" onHandlePress={this.navigateLogin}/>
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
        //backgroundColor : 'red',
        flexDirection : 'column'
    },
    top : {
        flex : 2,
        flexDirection : 'row'
        //backgroundColor : 'yellow'
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
        //backgroundColor : 'blue',
        alignItems : 'flex-start',
        paddingTop : 40
    },
});





export default SignUp;