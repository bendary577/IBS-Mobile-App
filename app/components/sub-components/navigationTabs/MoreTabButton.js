import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const MoreTabButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>{ navigation.dispatch(DrawerActions.toggleDrawer())}}  >
            <Image style={styles.icon} source={require('../../../assets/icons/Home/moreIcon.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 30,
        height : 30,
    },
})

export default MoreTabButton;
 