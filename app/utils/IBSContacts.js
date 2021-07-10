import {Linking, Alert } from 'react-native';

const WEBSITE_LINK = `http://www.ibsns.com`;
const FACEBOOK_LINK = `https://m.me/libs.hr.egypt`;
const EMAIL = `help@ibsns.com`;
const PAYMENT_EMAIL = `payment@ibsns.com`;
const MEDICAL_EMAIL = `medical@ibsns.com`;
const HOTLINE = `19786`;

export const openWebsite = () => {
    Linking.canOpenURL(WEBSITE_LINK).then(supported => {
        if (supported) {
          Linking.openURL(WEBSITE_LINK);
        } else {
         Alert.alert("Sorry, can't open this url")
        }
    });
}

export const openFacebookLink = () => {
    Linking.canOpenURL(FACEBOOK_LINK).then(supported => {
        if (supported) {
          Linking.openURL(FACEBOOK_LINK);
        } else {
         Alert.alert("Sorry, can't open this url")
        }
    });
}

export const openEmail = () => {
    Linking.canOpenURL(EMAIL).then(supported => {
        if (supported) {
          Linking.openURL(`mailto:${EMAIL}`);
        } else {
         Alert.alert("Sorry, can't open this url")
        }
    });
}

export const openPaymentEmail = () => {
    Linking.openURL(`mailto:${PAYMENT_EMAIL}`);
}

export const openMedicalEmail = () => {
    Linking.openURL(`mailto:${MEDICAL_EMAIL}`);
}

export const openHotline = () => {
    Alert.alert(HOTLINE)
}