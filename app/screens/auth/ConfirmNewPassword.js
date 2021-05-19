import React,{Component} from 'react';
import {SafeAreaView, Image, ImageBackground, View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import BackButton from '../../components/sub-components/buttons/BackButton';
import IBSConfirmationButton from '../../components/primitive-components/IBSConfirmationButton';
import IBSConfirmationText from '../../components/primitive-components/IBSConfirmationText';


let {width, height} = Dimensions.get('window'); 
let loginBackground = '../../assets/images/ResetPassword/reset-password.png';
let ibsImage = '../../assets/images/Login/ibs.png';


//------------------------ screen ---------------------
class ConfirmNewPassword extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            confirmationCode : '',
            completedInputs : 0,
            confirm : false,
        };
    }


    incrementCompleteInputs = () =>{
        if(this.state.completedInputs < 3 ){
            console.log(this.state.completedInputs)
            this.setState(prevState => {
                return {
                completedInputs : prevState.completedInputs+1
               }
          });
        }else{
            this.setState({
                confirm : true
            })
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
                        <Image style={styles.topImage} source={require(ibsImage)} />
                    </View>
                </View>
                <ImageBackground style={styles.backgroundImage} source={require(loginBackground)}>
                    <View style={styles.middle}>
                        <View style={styles.title}>
                            <TitleText value="Enter Your" />
                            <TitleText value="Confirmation Code" />
                            <View style={styles.redLine}></View>
                        </View>
                        <View style={styles.loginForm}>
                            <View style={styles.confirmationInputs}>
                                <IBSConfirmationText addCode={this.incrementCompleteInputs} />
                                <IBSConfirmationText addCode={this.incrementCompleteInputs}/>
                                <IBSConfirmationText addCode={this.incrementCompleteInputs}/>
                                <IBSConfirmationText addCode={this.incrementCompleteInputs}/>
                            </View>
                            <IBSConfirmationButton active={ this.state.confirm ? true : false} />
                            <View style={styles.confirmationText}>
                                <View>
                                    <Text style={styles.leftText}>
                                        {this.state.confirm ? "resend after 01:05" : "Didn’t Receive code?"}
                                    </Text>
                                </View>
                                <TouchableOpacity> 
                                    {this.state.confirm ?
                                     <Text style={styles.rightTextInactive}>Resend</Text> 
                                     :
                                     <Text style={styles.rightText}>Resend</Text>
                                    }
                                </TouchableOpacity>
                            </View>
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