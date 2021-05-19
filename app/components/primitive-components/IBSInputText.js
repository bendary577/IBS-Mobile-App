import React from 'react';
import { ScrollView } from 'react-native';
import {StyleSheet,TextInput, KeyboardAvoidingView  } from 'react-native';

const IBSInputText = (props) => {

    const offset = (Platform.OS === 'android') ? -500 : 0;

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={offset} >
            <ScrollView>
                <TextInput  
                    style={styles.inputText}
                    placeholder={props.placeholder} 
                    placeholderTextColor="#B9B9B9"
                    //onChangeText={}
                />
            </ScrollView>
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
        padding : 20,
        borderColor : '#DBDBDB',
        borderWidth : 1
    },
})

export default IBSInputText
