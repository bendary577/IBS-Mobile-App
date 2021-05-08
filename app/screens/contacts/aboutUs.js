import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {topStackNavigationColor} from '../../config/colors'


//------------------------ screen ---------------------
const AboutUs = () => {
	return (
	    <View>
            <Text>about us</Text>
        </View>
	);
}

//----------------------- screen navigation options ----------------
AboutUs.navigationOptions = {  
    title : "About Us",
    headerStyle : {
        backgroundColor : topStackNavigationColor
    }
} 


//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {

    }
});


export default AboutUs;