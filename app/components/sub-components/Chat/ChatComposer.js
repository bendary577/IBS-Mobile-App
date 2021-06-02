import React from 'react';
import {StyleSheet} from 'react-native';
import {Composer} from 'react-native-gifted-chat';

const ChatComposer = (props) => {
    return (
        <Composer
        {...props} 
        multiline={true}
        textInputStyle={styles.composer}
        //onTextChanged={(text) => console.log(text)}
        placeholder="Send Message"
        />
    )
}


const styles = StyleSheet.create({
    composer:{
        backgroundColor:'white',
        color:'#00346D',
        borderRadius:10,
        borderColor:'#C0CCDA',
        borderWidth:1,
        marginTop:15,
        marginBottom:10,
        paddingLeft: 10,
        flex : 4
      },
})


export default ChatComposer;
