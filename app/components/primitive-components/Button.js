import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({ children, style, onHandlePress }) => {
    return (
        <TouchableOpacity style={{...styles.button, ...style}} onPress={onHandlePress}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EC253C',
        width: 160,
        height: 64,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Button
