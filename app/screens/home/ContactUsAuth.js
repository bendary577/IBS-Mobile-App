import React from 'react';
import {SafeAreaView , ScrollView, View,Text, StyleSheet, TouchableHighlight, Image, Dimensions} from 'react-native';
import ContactUsCard from '../../components/sub-components/cards/ContactUsCard';
import {useTranslation} from 'react-i18next';
import {openEmail, openWebsite, openFacebookLink, openHotline, openMedicalEmail, openPaymentEmail} from '../../utils/IBSContacts'

let customerSupport = '../../assets/icons/contactUs/support.png';
let width = Dimensions.get('window').width; 

//------------------------ screen ---------------------
const ContactUsAuth = ({navigation}) => {

    const {t} = useTranslation();


	return (
        <ScrollView >
            <SafeAreaView  style={styles.container}>   
                    <View style={styles.upper}>
                        <View style={styles.cardsRow}>
                            <ContactUsCard type="hotline" title={t(`hotline`)} onHandlePress={openHotline}/>
                            <ContactUsCard type="email" title={t(`email`)} onHandlePress={openEmail}/>
                        </View>
                        <View style={styles.cardsRow}>
                            <ContactUsCard type="email" title={t(`paymentMail`)} onHandlePress={openPaymentEmail}/>
                            <ContactUsCard type="email" title={t(`medicalMail`)} onHandlePress={openMedicalEmail}/>
                        </View>
                        <View style={styles.cardsRow}>
                            <ContactUsCard type="website" title={t(`website`)} onHandlePress={openWebsite}/>
                            <ContactUsCard type="facebook" title={t(`facebook`)} onHandlePress={openFacebookLink}/>
                        </View>
                    </View>
                    {/* ---------------------------------------- customer support card ---------------------- */}
                    <View style={styles.lower}>
                        <TouchableHighlight underlayColor="white">
                            <View style={styles.card}>
                                <View style={styles.cardLeft}>
                                    <Image style={styles.icon} source={require(customerSupport)} />
                                </View>
                                <View style={styles.cardRight}>                              
                                    <Text style={styles.title}>{t(`customerSupport`)}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
            </SafeAreaView >
        </ScrollView>

	);
}



//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
      display: 'flex',
      flex : 1,
      paddingVertical: 20,
      paddingHorizontal: 10,
      justifyContent : 'center',
    },
    upper : {
    },
    lower : {
        alignItems : 'center'
    },
    cardsRow : {
        flexDirection : 'row',
        width : "100%",
        justifyContent : 'center',
    },
    card : {
        flexDirection : 'row',
        width : 320,
        height : 140,
        backgroundColor : "#D8D8D8",
        borderRadius : 10,
        marginTop : 10
    },
    cardLeft : {
        flex : 2,
        justifyContent : 'center',
        alignItems : 'center',
    },
    cardRight : {
        flex : 4,
        justifyContent : 'center',
        alignItems : 'center',
    },
    icon : {
        width : 80,
        height : 80
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold'
    }
});





export default ContactUsAuth;