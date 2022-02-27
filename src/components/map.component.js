import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
const CycloneMap = () => {
  const position = [-21, 70];

  return (
    <div className="card m-3">
      <div className="card-header">
        <h4>Map</h4>
      </div>
      <div className="card-body">
        <MapContainer center={position} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CycloneMap;
