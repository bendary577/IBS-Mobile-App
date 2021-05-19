import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const ProfileInfoCard = (props) => {

    return (
        <View style={styles.conatiner}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.info}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection : 'column',
        justifyContent : 'center',
        borderColor : '#D8D8D8',
        borderWidth : 2,
        backgroundColor : 'white',
        borderRadius : 15,
        height : 80,
        padding : 8,
        marginBottom : 8
    },
    title : {
        fontSize : 14,
        color : '#1A1A1A'
    },
    info : {
        fontSize : 16
    },
})

export default ProfileInfoCard;
