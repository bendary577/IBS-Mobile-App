import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getFlipForRTLStyle from '../../../utils/utilFunctions';

let backIcon = '../../../assets/icons/General/back.png';



const BackButton = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{navigation.goBack()}} >
            <Image style={[styles.icon, getFlipForRTLStyle()]} source={require(backIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 30,
        height : 30
    },
})

export default BackButton;
 