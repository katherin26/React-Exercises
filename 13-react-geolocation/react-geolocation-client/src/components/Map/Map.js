import * as React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, (e) =>
        console.log("error", e)
      );
    } else {
      alert(`Geolocation is not suported by this browser.`);
    }
  }

  getCoordinates(position) {
    if (!position) return;
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  render() {
    return (
      <>
        {this.state.latitude && this.state.longitude && (
          <MapContainer
            style={{ width: "100%", height: "85vh" }}
            center={[this.state.latitude, this.state.longitude]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[this.state.latitude, this.state.longitude]}>
              <Popup>
                {this.props.values.workout}
                Distance : {this.props.values.distance}
                Duration : {this.props.values.duration}
                Cadence : {this.props.values.cadence}
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </>
    );
  }
}
