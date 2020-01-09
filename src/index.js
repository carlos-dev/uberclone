import React, {Component, useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, PermissionsAndroid} from 'react-native';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

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
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loading: true,
    coordinates: ''
  }

  async componentDidMount() {
    console.log(this.state)
    Geolocation.getCurrentPosition(
      ({coords}) => {
        console.log(coords)
        this.setState({coordinates: coords});
        this.setState({loading: false});
      }
    );
  }

  render() {    
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
              showsBuildings={false}
            >
              <MapView.Marker 
                centerOffset={{ x: -18, y: -60 }}
                coordinate={{
                  latitude: coordinates.latitude,
                  longitude: coordinates.longitude,
                }}
              />
            </MapView>
          )}
        </View>
      )
    }
}
