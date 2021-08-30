import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let profileIcon = '../../../assets/icons/Home/profileIcon.png';
let profileIconInactive = '../../../assets/icons/Home/profileIconInactive.png';

const ProfileTabButton = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("MyProfile") }}>
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
        height: 85,
        width: 85,
        borderRadius: 68,
        borderWidth : 10,
        borderColor : 'white',
    },
})

export default ProfileTabButton;
 