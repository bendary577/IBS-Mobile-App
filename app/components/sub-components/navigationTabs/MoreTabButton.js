import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
let moreIcon = '../../../assets/icons/Home/moreIcon.png';


const MoreTabButton = (props) => {

    //const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{ props.navigation.dispatch(DrawerActions.toggleDrawer())}}>
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
 