import React from 'react';
import {SafeAreaView , ScrollView, View,Text, StyleSheet, TouchableHighlight, Image, Dimensions} from 'react-native';
import ContactUsCard from '../../components/sub-components/cards/ContactUsCard';


let customerSupport = '../../assets/icons/contactUs/support.png';
let width = Dimensions.get('window').width; 

//------------------------ screen ---------------------
const ContactUsAuth = ({navigation}) => {
	return (

        <ScrollView >
            <SafeAreaView  style={styles.container}>   
                    <View style={styles.upper}>
                        <View style={styles.cardsRow}>
                            <ContactUsCard type="hotline" title="Hotline"/>
                            <ContactUsCard type="email" title="Email"/>
                        </View>
                        <View style={styles.cardsRow}>
                            <ContactUsCard type="email" title="Payment Email"/>
                            <ContactUsCard type="email" title="Medical Email"/>
                        </View>
                        <View style={styles.cardsRow}>
                            <ContactUsCard type="website" title="Website"/>
                            <ContactUsCard type="facebook" title="Facebook"/>
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
                                    <Text style={styles.title}>Customer Support</Text>
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