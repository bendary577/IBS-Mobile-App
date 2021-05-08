import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Map from '../../components/sub-components/Map'
import Button from '../../components/primitive-components/Button'

const VisitUs = () => {
    return (
        <View style={styles.conatiner}>
        
            <View style={styles.header}>
                <Image source={require('../../assets/icons/VisitUs/visitus.png')} />
                <Text style={styles.title}>Visit Us</Text>
            </View>

            <Map>
                <View style={styles.footer}>
                    <View style={styles.footerTxtContainer}>
                        <Text style={styles.footerTxt}>
                            2, Street 261, New Maadi, Cairo, Egypt
                        </Text>
                    </View>

                    <Button style={styles.button} onHandlePress={()=> console.log("onHandlePress")}>
                        <Text style={styles.buttonTxt}>Directions</Text>
                    </Button>
                </View>
            </Map>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10
    },
    footer: {
        backgroundColor: '#EFEFEF',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20, 
      },
      footerTxtContainer: {
        width: 220
      },
      footerTxt: {
        fontSize: 14,
        marginLeft: 10,
        marginRight: 50
      },
      button: {
        width: 99,
        height: 40,
        marginRight: 10
      },
      buttonTxt: {
        fontSize: 18,
        color: '#fff'
      }
})
export default VisitUs
