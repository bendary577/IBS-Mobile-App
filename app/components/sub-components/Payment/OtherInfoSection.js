import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';


const OtherInfoSection = (props) => {

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.view}>
                <Text style={styles.text}>Invoice No.</Text>
                <Text style={styles.text}>34R17-07/2019</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>Hour Rate</Text>
                <Text style={styles.text}>85.23</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>Bank Name</Text>
                <Text style={styles.text}>CIBM</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>Account Number</Text>
                <Text style={styles.text}>10002979147</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
        padding : 20
    },
    view : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 20
    },
    text : {
        fontSize : 16
    },
})

export default OtherInfoSection;
