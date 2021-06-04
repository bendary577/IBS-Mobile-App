import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Text, Dimensions } from 'react-native';
import IBSButton from '../../primitive-components/IBSButton';
import { useNavigation } from '@react-navigation/native';
import {useTranslation} from 'react-i18next';


export default function SmallMap(props) {

  const navigation = useNavigation();
  const {t} = useTranslation();
  
  const navigate = () => {
    navigation.navigate("VisitUs");
  }

  return (
    <View style={styles.container}>
          <MapView style={styles.map} 
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          {/* -------------------------------- map footer ---------------------------- */}
          <View style={styles.footer}>

            {/* -------------------------------- footer text ---------------------------- */}
            <View style={styles.txtArea}>
              <Text style={styles.addressTxt}>
                {t(`address`)}
              </Text>
            </View>
            
            {/* -------------------------------- footer button ---------------------------- */}
            <View style={styles.buttonArea}>
              <IBSButton onHandlePress={navigate} title={t(`directions`)}/>
            </View>

          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
  },
  map: {
    width: Dimensions.get('window').width-40,
    height: 150,
  },
  footer: {
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
    height : 80,
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    width: Dimensions.get('window').width-40
  },
  txtArea: {
    fontSize: 14,
    flex : 3,
    justifyContent : 'center',
    alignItems : 'center',
  },
  buttonArea: {
    flex : 3,
    justifyContent : 'center',
    alignItems : 'center'
  },
  addressTxt : {
    padding : 15
  },
  buttonTxt: {
    fontSize: 18,
    color: 'white'
  }
});
