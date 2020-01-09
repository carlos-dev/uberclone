import React, {Component, useState, useEffect} from 'react';
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



export default class App extends Component {
  state = {
    loading: false,
    coordinates: {
      latitude: -22.978749,
      longitude: -43.190878
    }
  }

  render() {    
    console.log(this.state);
    const {loading, coordinates} = this.state;

    return (
        <View style={styles.container}>
          { loading ? (
            <ActivityIndicator size={"large"} />
          ): (
            <MapView 
              initialRegion={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
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
}
