import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity,TextInput, Image } from 'react-native';

let closeIcon = '../../../assets/icons/Support/close.png';
let supportIcon = '../../../assets/icons/Support/support.png';

const SupportMessageModal = (props) => {

    return (
        <View style={styles.container}>
           <View style={styles.titleView}>
               <View style={styles.left}>
                    <Image style={styles.icon} source={require(supportIcon)} />
                    <Text style={styles.titleText}>New  Support Ticket</Text>
               </View>
               <TouchableOpacity style={styles.right} onPress={()=>{props.onClose(false)}}>
                   <Image style={styles.icon} source={require(closeIcon)} />
               </TouchableOpacity>
           </View>
           <View style={styles.messageView}>
                <TextInput  
                    style={styles.inputText}
                    placeholder="What's your problem?" 
                    placeholderTextColor="#B9B9B9"
                    textAlign={'center'}
                />
           </View>
           <View style={styles.buttonView}>
               <TouchableOpacity style={styles.button}>
                   <Text style={styles.buttonText}>Start chat with support</Text>
               </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'column',
        backgroundColor : 'white',
        borderRadius : 15,
        width : 270,
        height : 270,
        padding : 10
    },
    titleView : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    left : {
        flexDirection : 'row'
    },
    icon : {
        width : 30,
        height : 30
    },
    titleText : {
        marginTop : 3
    },
    inputText : {
        width : "100%",
        height : 130,
        borderWidth  : 2,
        borderColor : 'gray',
        marginTop : 20,
        borderRadius : 15,
        padding : 2,
        textAlign : 'left'
    },
    button : {
        width : "100%",
        height : 45,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'red',
        borderRadius : 10,
        marginTop : 20

    },
    buttonText : {
        color : 'white'
    }
})

export default SupportMessageModal;
