import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function Map({ children }) {
  return (
    <View style={styles.container}>
      <View>
        <MapView style={styles.map} />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width-35,
    height: Dimensions.get('window').height - 200,
  },
});
