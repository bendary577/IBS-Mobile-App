import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';


const DeductionsSection = (props) => {

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.view}>
                <Text style={styles.text}>Taxes</Text>
                <Text style={styles.text}>2970.32</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>Social Insurance Employee Share</Text>
                <Text style={styles.text}>678.2</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>3648.52</Text>
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
    totalText : {
        fontSize : 16,
        color : 'red'
    }
})

export default DeductionsSection;
