import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text} from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    console.log('position is now: ', latitude, longitude);
  }, [latitude]);

  useEffect(() => {
    console.log('position is now: ', latitude, longitude);
  }, [longitude]);

  const handleLongPress = event => {
    const coordinates = event.nativeEvent.coordinate;
    setLatitude(coordinates.latitude)
    setLongitude(coordinates.longitude)
  }

  return (

    <View style={styles.container}>
      <Text>HELLO. ITS ME. YO BOY. PERICA# X:{latitude} Y:{longitude}</Text>
      <MapView style={styles.map} onLongPress={handleLongPress} />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'relative',
    top:'30%',
    left:'40%',
    color: 'green',
    zIndex: 999
  }
});