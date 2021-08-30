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
                    placeholder="0"
                    placeholderTextColor="black"
                    value={props.value}
                    onChangeText = { text => props.ChangeText(text)}
                    onSubmitEditing = {props.handleSubmitEditing}
                    maxLength={1}
                    //ref={props.isFirst === true ? null : props.ref}
                />
            </ScrollView>
        </KeyboardAvoidingView>    
    )
}

const styles = StyleSheet.create({
    inputText : {
        width : 70,
        backgroundColor : 'white',
        height : 70,
        borderRadius : 20,
        marginBottom : 10,
        padding : 20,
        borderColor : '#DBDBDB',
        borderWidth : 1,
        textAlign : 'center',
    },
})

export default IBSInputText
