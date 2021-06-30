import React from 'react';
import {StyleSheet,TextInput, View , Text, I18nManager} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//import { t } from '../../languages/i18Manager';
import {useTranslation} from 'react-i18next';

const IBSPasswordText = (props) => {

    const navigation = useNavigation();
    const {t} = useTranslation();

    return (
        <View>
            {
                props.hasChild ? 
                    <View style={styles.inputTextWithChild}>
                        <View style={styles.passwordInput}>
                            <TextInput  
                                placeholder={props.placeholder} 
                                placeholderTextColor="#B9B9B9"
                                secureTextEntry={true}
                                onChangeText={text => props.onChangeText(text)}
                            />
                        </View>
                        <TouchableOpacity style={styles.forgotText} onPress={()=>{navigation.navigate("ResetPassword")}}>
                            <Text style={styles.text}>{t(`forget`)}</Text> 
                        </TouchableOpacity>
                    </View>
                :
                    <TextInput  
                        style={styles.inputText}
                        placeholder={props.placeholder} 
                        placeholderTextColor="#B9B9B9"
                        secureTextEntry={true}
                        onChangeText={text => props.onChangeText(text)}
                    />
            }
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
