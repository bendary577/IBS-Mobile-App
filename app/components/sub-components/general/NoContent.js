import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
//import {t} from '../../../languages/i18Manager';
import {useTranslation} from 'react-i18next';

const NoContent = () => {

    const {t} = useTranslation();

    return (
        <View style={styles.container} >
            <Text style={styles.text}>{t(`noContent`)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
       flex : 1,
       justifyContent : 'center',
       alignItems : 'center',
    },
    text : {
        fontSize : 28,
        fontWeight : 'bold'
    }
})

export default NoContent;
 