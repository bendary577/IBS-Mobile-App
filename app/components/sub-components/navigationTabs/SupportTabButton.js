import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';

let supportIcon = '../../../assets/icons/Home/supportIcon.png';
let supportIconInactive = '../../../assets/icons/Home/supportIconInactive.png';


const SupportTabButton = (props) => {

    return (
        <TouchableOpacity>
            <Image style={styles.icon} source={
                props.active === true ? 
                require(supportIcon)
            : 
                require(supportIconInactive)
            } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 25,
        height : 25,
    },
})

export default SupportTabButton;
 