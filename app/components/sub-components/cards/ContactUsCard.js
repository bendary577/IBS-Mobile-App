import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native';




const ContactUsCard = (props) => {

    let hotline = '../../../assets/icons/contactUs/hotline.png';
    let email = '../../../assets/icons/contactUs/email.png';
    let website = '../../../assets/icons/contactUs/website.png';
    let facebook = '../../../assets/icons/contactUs/facebook.png';

	return (
	    <View style={styles.container}>
            <TouchableHighlight underlayColor="white">
                <View style={styles.card}>
                    {
                        props.type === "hotline" ? 
                            <Image style={styles.icon} source={require(hotline)} />
                        : 
                        props.type === "email" ? 
                            <Image style={styles.icon} source={require(email)} />
                        :
                        props.type === "website" ? 
                            <Image style={styles.icon} source={require(website)} />
                        :
                            <Image style={styles.icon} source={require(facebook)} />    
                    }
                    <Text style={styles.text}>{props.title}</Text> 
                </View>
            </TouchableHighlight>
        </View>
	);
}

const styles = StyleSheet.create({
    container : {
        padding : 10
    },
    card : {
        width : 150,
        height : 150,
        backgroundColor : "#D8D8D8",
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
    },
    icon : {
        width : 80,
        height : 80
    },
    text : {
        fontSize : 16,
        fontWeight : 'bold'
    }
});

export default ContactUsCard;