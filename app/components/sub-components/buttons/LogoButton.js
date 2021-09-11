import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';

let ibsIcon = '../../../assets/icons/Home/ibs.png';

const LogoButton = () => {
    return (
        <TouchableOpacity>
            <Image style={styles.icon} source={require(ibsIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 40,
        height : 40,
        marginLeft : 30,
        marginBottom : 15
    },
})

export default LogoButton;
 