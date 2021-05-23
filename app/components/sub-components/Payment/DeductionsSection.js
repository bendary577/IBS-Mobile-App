import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import {t} from '../../../languages/i18Manager';

const DeductionsSection = (props) => {

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.view}>
                <Text style={styles.text}>{t(`payment:taxes`)}</Text>
                <Text style={styles.text}>2970.32</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>{t(`payment:socialInsurance`)}</Text>
                <Text style={styles.text}>678.2</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.totalText}>{t(`payment:total`)}</Text>
                <Text style={styles.totalText}>3648.52</Text>
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
    totalText : {
        fontSize : 16,
        color : 'red'
    }
})

export default DeductionsSection;
