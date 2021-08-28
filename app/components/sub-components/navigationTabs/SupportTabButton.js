import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let supportIcon = '../../../assets/icons/Home/supportIcon.png';
let supportIconInactive = '../../../assets/icons/Home/supportIconInactive.png';


const SupportTabButton = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{ navigation.navigate("Support") }}>
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
        width : 30,
        height : 30,
    },
})

export default SupportTabButton;
 