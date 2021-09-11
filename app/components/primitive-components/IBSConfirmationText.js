import React , {Component} from 'react';
import { ScrollView } from 'react-native';
import {StyleSheet,TextInput, KeyboardAvoidingView  } from 'react-native';

class IBSInputText extends Component {

    render () {
    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="0"
                    returnKeyType="next"
                    autoFocus={this.props.isFirst ? true : false}
                    placeholderTextColor="black"
                    blurOnSubmit={this.props.isFirst ? false : true}
                    value={this.props.value}
                    //onChangeText = { text => this.props.ChangeText(text)}
                    onKeyPress = {(key) => this.props.onKeyPressed(key)}
                    maxLength={1}
                    autoCapitalize='none'
                    ref={this.props.reference}
                />
        </KeyboardAvoidingView>    
    )
    }
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
