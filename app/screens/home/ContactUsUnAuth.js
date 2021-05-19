import React from 'react';
import {View, StyleSheet} from 'react-native';
import ContactUsCard from '../../components/sub-components/cards/ContactUsCard';






//------------------------ screen ---------------------
const ContactUsUnAuth = ({navigation}) => {

    
let email = '../../assets/icons/contactUs/email.png';

	return (
	    <View style={styles.container}>
            <View style={styles.cardsRow}>
                <ContactUsCard type="hotline" title="Hotline"/>
                <ContactUsCard type="email" title="Email"/>
            </View>
            <View style={styles.cardsRow}>
                <ContactUsCard type="website" title="Website"/>
                <ContactUsCard type="facebook" title="Facebook"/>
            </View>
        </View>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
      flex : 1,
      padding : 20,
    },
    cardsRow : {
        flexDirection : 'row',
        justifyContent : 'center'
    }
});





export default ContactUsUnAuth;