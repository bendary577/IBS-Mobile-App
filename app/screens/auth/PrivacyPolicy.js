import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import TitleText from '../../components/primitive-components/TitleText';
import {useTranslation} from 'react-i18next';
import {primaryRedColor} from '../../config/colors';
import { ScrollView } from 'react-native';


//------------------------ screen ---------------------
const PrivacyPolicy = (props) => {

    const {t} = useTranslation();

        return (
                <View style={styles.container}>
                    <ScrollView>
                    {/* ------------------------------------- header section ------------------------------------ */}
                    <View style={styles.header}>
                        <View style={styles.card}>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/icons/aboutUs/about.png')}
                            />  
                        </View>
                        <TitleText value={t(`ibs_app`)}/>
                    </View>

                    {/* ------------------------------------- about text section ------------------------------------ */}
                    <View>
                        <Text style={styles.text}>
                            {t(`privacy_description_1`)}
                        </Text>

                        <Text style={[styles.text, styles.bold]}>
                            {t(`registration_by`)}
                        </Text>

                        <Text style={styles.bold}>
                            {t(`id_card`)}
                        </Text>

                        <Text style={styles.bold}>
                            {t(`mobile_phone`)}
                        </Text>

                        <Text style={styles.text}>
                            {t(`privacy_description_2`)}
                        </Text>
                        
                        <Text style={styles.text}>
                            {t(`privacy_description_3`)}
                        </Text>

                        <Text style={styles.text}>
                            {t(`privacy_description_4`)}
                        </Text>

                        <Text style={styles.text}>
                            {t(`all_rights_reserved`)}
                        </Text>
                    </View>
                    </ScrollView>
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
    },
    bold : {
        fontWeight : 'bold'
    }
});


export default PrivacyPolicy;