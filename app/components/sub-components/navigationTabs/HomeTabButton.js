import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, StyleSheet} from 'react-native';

let homeIcon = '../../../assets/icons/Home/homeIcon.png';
let homeIconInavtive = '../../../assets/icons/Home/homeIconInactive.png';


const HomeTabIcon = (props) => {

    return (
        <TouchableOpacity>
            <Image style={styles.icon} source={
                props.active === true ? 
                require(homeIcon)
            : 
                require(homeIconInavtive)
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

export default HomeTabIcon;
 