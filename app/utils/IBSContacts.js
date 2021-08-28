import {Linking, Alert } from 'react-native';

const WEBSITE_LINK = `http://www.ibsns.com`;
const LOCATION_LINK = `https://www.google.com/maps/place/IBS/@29.9695947,31.2728568,17z/data=!3m1!4b1!4m5!3m4!1s0x145839bf6a93f9e1:0x8a62a45fe12e94e2!8m2!3d29.9696018!4d31.2749924`;
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

export const openLocation = () => {
    Linking.canOpenURL(LOCATION_LINK).then(supported => {
        if (supported) {
          Linking.openURL(LOCATION_LINK);
        } else {
         Alert.alert("Sorry, can't open this url")
        }
    });
}