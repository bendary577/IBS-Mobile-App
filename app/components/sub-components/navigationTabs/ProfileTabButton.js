import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let profileIcon = '../../../assets/icons/Home/profileIcon.png';
let profileIconInactive = '../../../assets/icons/Home/profileIconInactive.png';

const ProfileTabButton = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{ navigation.navigate("MyTransactions") }}>
            <Image style={styles.icon} source={
                props.active === true ? 
                require(profileIcon)
            : 
                require(profileIconInactive)
            } />
        </TouchableOpacity>
    )
}

// const styles = StyleSheet.create({
//     container : {
//         justifyContent: 'center',
//         alignItems: 'center',
//         // flex: 1
//     },
//     icon : {
//         // position: 'absolute',
//         bottom: 0, 
//         height: 90,
//         width: 90,
//         transform: [{translateY: -20}],
//         borderRadius: 68,
//         borderWidth : 8,
//         borderColor : 'white',
//     },
// })


const styles = StyleSheet.create({
    icon : {
        width : 30,
        height : 30,
    },
})

export default ProfileTabButton;