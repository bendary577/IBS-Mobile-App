import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {titleTextColor} from '../../config/colors';
import {textAlign} from '../../utils/utilFunctions';

const TitleText = (props) => {
	return (
	    <Text style={[styles.text, textAlign]}>{props.value}</Text>
	);
}

const styles = StyleSheet.create({
    text: {
        color : titleTextColor,
        fontWeight : 'bold',
        fontSize: 22,
    }
});

export default TitleText;