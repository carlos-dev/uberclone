import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#474363',
    alignItems: 'center',
    justifyContent: 'center'
  },

  map: {
    ...StyleSheet.absoluteFillObject
  }
})

function App() {
  const [loading, setLoading] = useState(false);
  const [coodinates, setCoordinates] = useState({
    latitude: -23.030815,
    longitude: -43.472856
  });
  return (
    <View style={styles.container}>
      { loading ? (
        <ActivityIndicator size={"large"} />
      ): (
        <MapView 
          initialRegion={{
            latitude: coodinates.latitude,
            longitude: coodinates.longitude,
            latitudeDelta: 0.0068,
            longitudeDelta: 0.0068
          }}
          style={styles.map}
        >

        </MapView>
      )}
   </View>
  )
}

export default App;
