import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {topStackNavigationColor} from '../../config/colors';
import TitleText from '../../components/primitive-components/TitleText';


//------------------------ screen ---------------------
const AboutUs = ({ navigation }) => {
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
                <TitleText value="about us"/>
            </View>

            {/* ------------------------------------- about text section ------------------------------------ */}
            <View style={styles.about}>
                <Text style={styles.text}>
                    We are a proud and happy company that serves the outsourcing field with passion and commitment.
                </Text>

                <Text>
                    And with hard work and dedication IBS has become on of Egypt’s top leading Outsourcing firms in the country.
                </Text>

                <Text>
                IBS was founded in 1984 and distinguished itself quickly within the market compared to the traditional labor contractor that existed.
                </Text>
                
                <Text>
                Over a period of 37 years, IBS has flourished with a client base of around 350 local and multinational companies and an outsourced headcount of around 45,000 employees across the country in a variety of fields.
                </Text>
            </View>
        </View>
	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {

    },
    header : {

    },
    card : {

    },
    icon : {
        width : 20,
        height : 20
    },
    about : {

    },
    text : {
    }
});


//----------------------- screen navigation options ----------------
AboutUs.navigationOptions = {  
    title : "About Us",
    headerStyle : {
        backgroundColor : topStackNavigationColor
    }
} 




export default AboutUs;