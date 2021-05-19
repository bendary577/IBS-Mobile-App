import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';

let moreIcon = '../../../assets/icons/Home/moreIcon.png';


const MoreTabButton = () => {

    return (
        <TouchableOpacity>
            <Image style={styles.icon} source={require(moreIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 25,
        height : 25,
    },
})

export default MoreTabButton;
 