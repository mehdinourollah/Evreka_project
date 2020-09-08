import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

function MapView(props) {

  console.log({ mapppppppppp: props.data.location })


  const [currentLocation, setCurrentLocation] = useState({ lat: 39.9229025, lng: 32.8419197 })
  const [zoom, setZoom] = useState(12)
  const [venues, setVenues] = useState(


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
  useEffect(() => {
    if (props.data.location) {
      setCurrentLocation({ lat: props.data.location.latitude, lng: props.data.location.longitude })
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

  },[props.data.location])





  return (
    <Map center={currentLocation} zoom={zoom}>
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
