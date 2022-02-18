import React, { useState, useEffect } from "react";
import "./Map.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";

function MyComponent({ updateLocation }) {
  const map = useMapEvent("click", (e) => {
    console.log("Map was clicked", e);
    updateLocation(e.latlng.lat, e.latlng.lng);
  });
  return null;
}

export default function MapFn({
  values,
  latitude,
  longitude,
  updateLocation,
  markers,
}) {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!position) return;
          updateLocation(position.coords.latitude, position.coords.longitude);
        },
        (e) => console.log("error", e)
      );
    } else {
      alert(`Geolocation is not suported by this browser.`);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {latitude && longitude && (
        <MapContainer
          style={{ width: "100%", height: "85vh" }}
          center={[latitude, longitude]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              {values.workout}
              Distance : {values.distance}
              Duration : {values.duration}
              Cadence : {values.cadence}
            </Popup>
          </Marker>
          {markers.map((marker, i) => (
            <Marker key={i} position={[marker.latitude, marker.longitude]}>
              <Popup>
                {marker.workout}
                Distance : {marker.distance}
                Duration : {marker.duration}
                Cadence : {marker.cadence}
              </Popup>
            </Marker>
          ))}
          <MyComponent updateLocation={updateLocation} />
        </MapContainer>
      )}
    </>
  );
}
