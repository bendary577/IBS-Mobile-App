import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import {t} from '../../../languages/i18Manager';


const OtherInfoSection = (props) => {

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.view}>
                <Text style={styles.text}>{t(`payment:invoice`)}</Text>
                <Text style={styles.text}>34R17-07/2019</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>{t(`payment:hourRate`)}</Text>
                <Text style={styles.text}>85.23</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>{t(`payment:bankName`)}</Text>
                <Text style={styles.text}>CIBM</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>{t(`payment:accountNumber`)}</Text>
                <Text style={styles.text}>10002979147</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
        padding : 20
    },
    view : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 20
    },
    text : {
        fontSize : 16
    },
})

export default OtherInfoSection;
