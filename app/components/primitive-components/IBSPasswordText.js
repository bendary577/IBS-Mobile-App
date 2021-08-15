import React,{useState} from 'react';
import {StyleSheet, Image, TextInput, View , Text, I18nManager} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

let hide = '../../assets/icons/Login/Hide.png';
let view = '../../assets/icons/Login/View.png';

const IBSPasswordText = (props) => {

    const [textVisible, setTextVisible] = useState(false);
    const navigation = useNavigation();
    const {t} = useTranslation();

    return (
                <View>
                    <View style={styles.inputTextWithChild}>
                        <View style={styles.passwordInput}>
                            <TextInput  
                                placeholder={props.placeholder} 
                                placeholderTextColor="#B9B9B9"
                                secureTextEntry={props.hasChild ? true : !textVisible}
                                onChangeText={text => props.onChangeText(text)}
                            />
                        </View>
                        {
                            props.hasChild ? 
                            <TouchableOpacity style={styles.forgotText} onPress={()=>{navigation.navigate("ResetPassword")}}>
                                <Text style={styles.text}>{t(`forget`)}</Text> 
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.forgotText} onPress={()=>{setTextVisible(!textVisible)}}>
                                <Image source={textVisible === true ? require(hide) : require(view) }  />
                            </TouchableOpacity>
                        }
                    </View>
                </View>

    )
}

const styles = StyleSheet.create({
    inputText : {
        width : "93%",
        backgroundColor : 'white',
        height : 60,
        borderRadius : 20,
        marginBottom : 10,
        padding : 20,
        borderColor : '#DBDBDB',
        borderWidth : 1,
        textAlign : I18nManager.isRTL ? 'right' : 'left'
    },
    inputTextWithChild : {
        width : "93%",
        backgroundColor : 'white',
        height : 60,
        borderRadius : 20,
        marginBottom : 10,
        borderColor : '#DBDBDB',
        borderWidth : 1,
        flexDirection : 'row',
    },
    text : {
        color : 'red'
    },
    passwordInput : {
        flex : 4,
        height : 60,
        justifyContent : 'center',
        alignItems : 'flex-start',
        padding : 20
    },
    forgotText : {
        flex : 2,
        justifyContent : 'center',
        paddingRight : 20
    }
})

export default IBSPasswordText
