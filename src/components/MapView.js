import React, { useState, useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

function MapView(props) {


  const mapRef = useRef(null);

  const [currentLocation, setCurrentLocation] = useState({ lat: 39.8974983, lng: 32.7762436 })
  const [zoom, setZoom] = useState(13)
  const [venues, setVenues] = useState(


    [
      {
        "description": "DESC",
        "name": "NAME",
        "geometry": [
          props.data.location ? props.data.location.latitude : 39.8974983,
          props.data.location ? props.data.location.longitude : 32.7762436,
        ]
      },
    ]





  )
  useEffect(() => {
    if (props.data.location) {
      setCurrentLocation({ lat: String(props.data.location.latitude).slice(0, 6), lng: String(props.data.location.longitude).slice(0, 6) })
      setVenues(
        [
          {
            "description": "DESC",
            "name": "NAME",
            "geometry": [
              props.data.location ? props.data.location.latitude : 52.500772,
              props.data.location ? props.data.location.longitude : 13.472764,
            ]
          },
        ]
      )

    }
    mapRef.current.leafletElement.whenReady(() => {
      mapRef.current.leafletElement.invalidateSize()
    })


  }, [props.data.location,mapRef])





  return (
    <Map ref={mapRef} center={currentLocation} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />

      {/* <Markers venues={data.venues} /> */}
      <Markers venues={venues} />
    </Map>
  )
}

export default MapView;
