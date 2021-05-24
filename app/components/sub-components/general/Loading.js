import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {t} from '../../../languages/i18Manager';


const Loading = () => {

    return (
        <View style={styles.container} >
            <ActivityIndicator size="large" color="red" style={styles.loading}/>
            <Text style={styles.text}>{t(`general:loading`)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
       flex : 1,
       justifyContent : 'center',
       alignItems : 'center',
    },
    loading : {
        marginBottom : 20
    },
    text : {
        fontSize : 28,
        fontWeight : 'bold'
    }
})

export default Loading;
 