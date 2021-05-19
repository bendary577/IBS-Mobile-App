import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const IBSButton = ({ children, style, onHandlePress }) => {
    return (
        <TouchableOpacity style={{...styles.button, ...style}} onPress={onHandlePress}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EC253C',
        width: 130,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default IBSButton
