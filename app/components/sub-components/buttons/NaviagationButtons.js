import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let contact = '../../../assets/icons/Navigation/contact.png';
let visit = '../../../assets/icons/Navigation/visit.png';
let about = '../../../assets/icons/Navigation/about.png';

const NavigationButtons = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("ContactUsUnAuth")}}>
                    <Image style={styles.icon} source={require(contact)} />
                    <Text style={styles.text}> Contact Us </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("VisitUs")}}>
                    <Image style={styles.icon} source={require(visit)} />
                    <Text style={styles.text}> Visit Us </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("AboutUs")}}>
                    <Image style={styles.icon} source={require(about)} />
                    <Text style={styles.text}> About Us </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginLeft : 10,
    },
    button : {
        flexDirection : 'column',
        alignItems : 'center',
        margin : 5
    },
    text: {
        fontSize : 12
    },
    icon : {
        width : 30,
        height : 30
    },
})

export default NavigationButtons;
 