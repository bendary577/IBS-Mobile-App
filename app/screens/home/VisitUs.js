import React from 'react'
import {ScrollView, SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'
import Map from '../../components/sub-components/Maps/Map'
import TitleText from '../../components/primitive-components/TitleText';
import {primaryRedColor} from '../../config/colors';
import {useTranslation} from 'react-i18next';

const VisitUs = ({navigation}) => {

    const {t} = useTranslation();

    return (
        <ScrollView>
            <SafeAreaView style={styles.conatiner}>
                {/* ------------------------------------- header section ------------------------------------ */}
                <View style={styles.header}>
                    <View style={styles.card}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/icons/VisitUs/location.png')}
                        />  
                    </View>
                    <TitleText value={t(`visitUs`)}/>
                </View>
                {/* ------------------------------------ map view ------------------------------------------------ */}
                <Map nav={navigation}/>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    header: {
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10
    },
})
export default VisitUs;
