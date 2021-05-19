import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {primaryRedColor} from '../../../config/colors';

let paymentCard = '../../../assets/images/Home/paymentCard.png';
let paymentLogo = '../../../assets/images/Home/paymentLogo.png';
let arrowIcon = '../../../assets/images/Home/arrow.png';


const PaymentCard = (props) => {

	return (
	    <View style={styles.container}>
           <ImageBackground style={styles.paymentCardImage} source={require(paymentCard)}>
               <View style={styles.topHeader}>
                    <View style={styles.header}>
                        <View style={styles.card}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.icon}
                                    source={require(paymentLogo)}
                                    />  
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>My Payments</Text>
                    </View>
                    <View style={styles.arrow}>
                        <TouchableOpacity>
                            <Image style={styles.arrowIcon} source={require(arrowIcon)} />
                        </TouchableOpacity>
                    </View>
               </View>
                <Text style={styles.description}>View all your payments details from this tap</Text>
           </ImageBackground>
        </View>
	);
}

const styles = StyleSheet.create({
    container : {
        position: 'absolute',
        top: 20,
        bottom: 0,
        left: 15,
        right: 15,
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