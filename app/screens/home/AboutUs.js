import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import {primaryRedColor} from '../../config/colors';
import {useTranslation} from 'react-i18next';


//------------------------ screen ---------------------
const AboutUs = ({navigation}) => {

    const {t} = useTranslation();

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
                <TitleText value={t(`aboutIBS`)}/>
            </View>

            {/* ------------------------------------- about text section ------------------------------------ */}
            <View>
                <Text style={styles.text}>
                    {t(`about_description_1`)}
                </Text>

                <Text style={styles.text}>
                    {t(`about_description_2`)}
                </Text>

                <Text style={styles.text}>
                    {t(`about_description_3`)}
                </Text>
                
                <Text style={styles.text}>
                    {t(`about_description_4`)}
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