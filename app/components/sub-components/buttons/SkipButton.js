import React from 'react';
import { Touchable } from 'react-native';
import { Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


let SkipIcon = '../../../assets/icons/General/skip.png';

const SkipButton = ({ onHandlePress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress}>
            <Text style={styles.text}> Skip </Text>
            <Image style={styles.icon} source={require(SkipIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    },
    text: {
        fontSize : 20
    },
    icon : {
        width : 30,
        height : 30
    },
})

export default SkipButton;
 