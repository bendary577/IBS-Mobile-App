import React from 'react';
import { ScrollView } from 'react-native';
import {StyleSheet,TextInput, KeyboardAvoidingView , I18nManager } from 'react-native';

const IBSInputText = (props) => {

    const offset = (Platform.OS === 'android') ? -500 : 0;

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={offset} >
                <TextInput  
                    style={styles.inputText}
                    placeholder={props.placeholder} 
                    placeholderTextColor="#B9B9B9"
                    onChangeText={text => props.onChangeText(text)}
                />
        </KeyboardAvoidingView>    
    )
}

const styles = StyleSheet.create({
    inputText : {
        width : "93%",
        backgroundColor : 'white',
        height : 60,
        borderRadius : 20,
        marginBottom : 10,
        padding : 8,
        borderColor : '#DBDBDB',
        borderWidth : 1,
        textAlign : I18nManager.isRTL ? 'right' : 'left'
    },
})

export default IBSInputText
