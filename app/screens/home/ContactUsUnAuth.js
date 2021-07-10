import React from 'react';
import {View, StyleSheet} from 'react-native';
import ContactUsCard from '../../components/sub-components/cards/ContactUsCard';
import {useTranslation} from 'react-i18next';
import {openEmail, openWebsite, openFacebookLink, openHotline} from '../../utils/IBSContacts'

//------------------------ screen ---------------------
const ContactUsUnAuth = ({navigation}) => {

    const {t} = useTranslation();

	return (
	    <View style={styles.container}>
            <View style={styles.cardsRow}>
                <ContactUsCard type="hotline" title={t(`hotline`)} onHandlePress={openHotline}/>
                <ContactUsCard type="email" title={t(`email`)} onHandlePress={openEmail}/>
            </View>
            <View style={styles.cardsRow}>
                <ContactUsCard type="website" title={t(`website`)}  onHandlePress={openWebsite}/>
                <ContactUsCard type="facebook" title={t(`facebook`)} onHandlePress={openFacebookLink}/>
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