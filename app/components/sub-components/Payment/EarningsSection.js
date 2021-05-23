import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import {t} from '../../../languages/i18Manager';

const EaringsSection = (props) => {

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.view}>
                <Text style={styles.text}>{t(`payment:grossSalary`)}</Text>
                <Text style={styles.text}>15000</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>{t(`payment:fixedTransportaion`)}</Text>
                <Text style={styles.text}>3000</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.totalText}>{t(`payment:total`)}</Text>
                <Text style={styles.totalText}>18000</Text>
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

export default EaringsSection;
