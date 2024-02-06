import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  }
})

const Map = (props) => {
  const [marker, setMarker] = useState(null)

  const showMarker = (e) => {
    const coords = e.nativeEvent.coordinate
    setMarker(coords)
  }

  return (
    <MapView
      style={styles.map}
      region={props.location}
      mapType={props.mapType}
      onLongPress={showMarker}
    >
      {marker &&
        <Marker
          title='My marker'
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude
          }}
        />
      }
    </MapView>
  )
}

export default Map