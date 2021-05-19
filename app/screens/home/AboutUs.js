import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import {primaryRedColor} from '../../config/colors';



//------------------------ screen ---------------------
const AboutUs = ({navigation}) => {
	return (
	    <View style={styles.container}>
            {/* ------------------------------------- header section ------------------------------------ */}
            <View style={styles.header}>
                <View style={styles.card}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/aboutUs/about.png')}
                    />  
                </View>
                <TitleText value="About IBS"/>
            </View>

            {/* ------------------------------------- about text section ------------------------------------ */}
            <View>
                <Text style={styles.text}>
                    We are a proud and happy company that serves the outsourcing field with passion and commitment.
                </Text>

                <Text style={styles.text}>
                    And with hard work and dedication IBS has become on of Egypt’s top leading Outsourcing firms in the country.
                </Text>

                <Text style={styles.text}>
                IBS was founded in 1984 and distinguished itself quickly within the market compared to the traditional labor contractor that existed.
                </Text>
                
                <Text style={styles.text}>
                Over a period of 37 years, IBS has flourished with a client base of around 350 local and multinational companies and an outsourced headcount of around 45,000 employees across the country in a variety of fields.
                </Text>
            </View>
        </View>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    header : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
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
    icon : {
        width : 20,
        height : 20
    },
    text : {
        marginTop : 15,
        marginBottom : 15
    }
});





export default AboutUs;