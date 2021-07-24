import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity,TextInput, Image } from 'react-native';
//import {t} from '../../../languages/i18Manager';
import {useTranslation} from 'react-i18next';

let closeIcon = '../../../assets/icons/Support/close.png';
let supportIcon = '../../../assets/icons/Support/support.png';

const SupportMessageModal = (props) => {

    const {t} = useTranslation();

    return (
        <View style={styles.container}>

           <View style={styles.titleView}>
               <View style={styles.left}>
                    <Image style={styles.icon} source={require(supportIcon)} />
                    <Text style={styles.titleText}>{t(`newTicket`)}</Text>
               </View>
               <TouchableOpacity style={styles.right} onPress={()=>{props.onClose(false)}}>
                   <Image style={styles.icon} source={require(closeIcon)} />
               </TouchableOpacity>
           </View>
           <View style={styles.messageView}>
                <TextInput  
                    style={styles.subjectInputText}
                    placeholder={t(`support_model_subject`)} 
                    placeholderTextColor="#B9B9B9"
                    textAlign={'center'}
                    onChangeText={text => props.onChangeSubject(text)}
                />
                <TextInput  
                    style={styles.discriptionInputText}
                    placeholder={t(`support_model_description`)}
                    placeholderTextColor="#B9B9B9"
                    textAlign={'center'}
                    onChangeText={text => props.onChangeDescription(text)}
                />
           </View>
           <View style={styles.buttonView}>
               <TouchableOpacity style={styles.button} onPress={()=>{props.onHandlePress()}}>
                   <Text style={styles.buttonText}>{t(`startChat`)}</Text>
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
        height : 310,
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
    subjectInputText : {
        width : "100%",
        height : 50,
        borderWidth  : 2,
        borderColor : 'gray',
        marginTop : 10,
        borderRadius : 15,
        padding : 2,
        textAlign : 'left'
    },
    discriptionInputText : {
        width : "100%",
        height : 130,
        borderWidth  : 2,
        borderColor : 'gray',
        marginTop : 10,
        borderRadius : 15,
        padding : 10
    },
    button : {
        width : "100%",
        height : 45,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'red',
        borderRadius : 10,
        marginTop : 10

    },
    buttonText : {
        color : 'white'
    }
})

export default SupportMessageModal;
