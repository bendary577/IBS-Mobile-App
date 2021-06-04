import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import getFlipForRTLStyle from '../../../utils/utilFunctions';
import {useTranslation} from 'react-i18next';

let SkipIcon = '../../../assets/icons/General/skip.png';

const SkipButton = ({ onHandlePress }) => {
    const {t} = useTranslation();
    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress}>
            <Text style={styles.text}> { t(`skip`)} </Text>
            <Image style={[styles.icon, getFlipForRTLStyle()]} source={require(SkipIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    },
    text: {
        fontSize : 20
    },
    icon : {
        width : 30,
        height : 30
    },
})

export default SkipButton;
 