import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useTranslation} from 'react-i18next';
import {textAlign} from '../../../utils/utilFunctions';

const ProfileInfoCard = (props) => {

    const {t} = useTranslation();

    return (
        <View style={styles.conatiner}>
            <Text style={[styles.title, textAlign()]}>{props.title}</Text>
            <Text style={props.value === '' || props.value === null || props.value === undefined ? [styles.info, styles.not_available, textAlign()] : [styles.info, textAlign()]}> {props.value === '' || props.value === null || props.value === undefined ? t(`no_info`) : props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection : 'column',
        justifyContent : 'center',
        borderColor : '#D8D8D8',
        borderWidth : 2,
        backgroundColor : 'white',
        borderRadius : 15,
        height : 80,
        padding : 8,
        marginBottom : 8
    },
    title : {
        fontSize : 14,
        color : '#666666'
    },
    info : {
        fontSize : 16,
        fontWeight : 'bold'
    },
    not_available : {
        color : 'red'
    }
})

export default ProfileInfoCard;
