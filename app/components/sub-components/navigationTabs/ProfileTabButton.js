import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';

let profileIcon = '../../../assets/icons/Home/profileIcon.png';
let profileIconInactive = '../../../assets/icons/Home/profileIconInactive.png';

const ProfileTabButton = (props) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.icon} source={
                 props.active === true ? 
                 require(profileIcon)
             : 
                 require(profileIconInactive)
            } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon : {
        position: 'absolute',
        bottom: -10, 
        height: 75,
        width: 75,
        borderRadius: 68,
        borderWidth : 10,
        borderColor : 'white',
    },
})

export default ProfileTabButton;
 