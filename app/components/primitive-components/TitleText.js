import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {titleTextColor} from '../../config/colors';


const TitleText = (props) => {
	return (
	    <Text style={styles.text}>{props.value}</Text>
	);
}

const styles = StyleSheet.create({
    text: {
        color : titleTextColor,
        fontWeight : 'bold',
        fontSize: 20,
    }
  });

export default TitleText;