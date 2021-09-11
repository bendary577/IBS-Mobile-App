import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {primaryRedColor} from '../../../config/colors';
//import {t} from '../../../languages/i18Manager';
import getFlipForRTLStyle from '../../../utils/utilFunctions';
import { useNavigation } from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

let paymentCard = '../../../assets/images/Home/paymentCard.png';
let paymentLogo = '../../../assets/images/Home/paymentLogo.png';
let arrowIcon = '../../../assets/images/Home/arrow.png';


const PaymentCard = (props) => {

    const navigation = useNavigation();
    const {t} = useTranslation();

	return (
	    <TouchableOpacity onPress={()=>{navigation.navigate("MyTransactions")}} style={styles.container}>
           <ImageBackground style={styles.paymentCardImage} source={require(paymentCard)}>
               <View style={styles.topHeader}>
                    <View style={styles.header}>
                        <View style={styles.card}>
                            <Image
                                style={styles.icon}
                                source={require(paymentLogo)}
                                    />  
                        </View>
                        <Text style={styles.title}>{t(`myPayments`)}</Text>
                    </View>
                    <View style={styles.arrow}>
                        <Image style={[styles.arrowIcon, getFlipForRTLStyle()]} source={require(arrowIcon)} />
                    </View>
               </View>
                <Text style={styles.description}>{t(`paymentDescription`)}</Text>
           </ImageBackground>
        </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    container : {
        position: 'absolute',
        top: 20,
        bottom: 0,
        left: 15,
        right: 15,
        height: 180
    },
    paymentCardImage : {
        width : "100%",
        height : "100%"
    },
    topHeader : {
       // backgroundColor : 'blue'
       flexDirection : 'row'
    },
    arrow : {
        flex : 3,
        justifyContent : 'center',
        alignItems : 'center',
    },
    arrowIcon : {
        width : 15,
        height : 15,
        marginTop : 15,
        marginLeft : 90
    },
    header: {
        flex : 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent : 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginLeft : 20,
    },
    card : {
        width : 30,
        height: 30,
        backgroundColor : primaryRedColor,
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius : 8,
        marginRight : 5
    },
    title : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18
    },
    description : {
        width : "70%",
        color : 'white',
        marginTop : 10,
        margin : 20,
    }
});

export default PaymentCard;