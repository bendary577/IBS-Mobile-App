import React from 'react';
import {Image, StyleSheet} from 'react-native';

let ibsIcon = '../../../assets/icons/Home/ibs-logo.png';

const LogoButton = () => {
    return (
        <Image style={styles.icon} source={require(ibsIcon)} />
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 40,
        height : 40
    },
})

export default LogoButton;
 