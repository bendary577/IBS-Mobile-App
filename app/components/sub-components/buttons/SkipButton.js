import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {t}  from '../../../languages/i18Manager';
import getFlipForRTLStyle from '../../../utils/utilFunctions';

let SkipIcon = '../../../assets/icons/General/skip.png';

const SkipButton = ({ onHandlePress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress}>
            <Text style={styles.text}> { t(`general:skip`)} </Text>
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
 