import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let ibsIcon = '../../../assets/icons/Home/ibs.png';



const LogoButton = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{navigation.goBack()}} >
            <Image style={styles.icon} source={require(ibsIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 40,
        height : 40,
        marginLeft : 30
    },
})

export default LogoButton;
 