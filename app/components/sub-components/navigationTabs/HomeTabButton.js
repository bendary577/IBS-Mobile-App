import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let homeIcon = '../../../assets/icons/Home/homeIcon.png';
let homeIconInavtive = '../../../assets/icons/Home/homeIconInactive.png';


const HomeTabIcon = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{padding : 5}} onPress={()=>{ navigation.navigate("Home") }}>
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
        width : 30,
        height : 30,
    },
})

export default HomeTabIcon;
 