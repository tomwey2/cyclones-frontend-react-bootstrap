import {MapContainer, Marker, Popup, TileLayer, Polyline} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {createElementHook, useLeafletContext} from "@react-leaflet/core";
import L from "leaflet";
import {useEffect, useRef} from "react";

const center = [-21, 65];
const zoom = 4;

function getLatLongs(props) {
  let coords = [];
  props.details.map(data => coords.push(L.latLng(data.coord.x, data.coord.y)));
  return coords;
}

function Trajectory(props) {
  const context = useLeafletContext();
  const trajectoryRef = useRef();
  const propsRef = useRef(props.details);

  useEffect(() => {
    trajectoryRef.current = new L.Polyline(getLatLongs(props), {
      color: props.color
    });
    const container = context.layerContainer || context.map;
    container.addLayer(trajectoryRef.current);

    return () => {
      container.removeLayer(trajectoryRef.current);
    };
  }, []);

  useEffect(() => {
    if (props.details.length !== propsRef.length) {
      trajectoryRef.current.setLatLngs(getLatLongs(props));
    }
    propsRef.current = props.details;
  }, [props.details]);

  return null;
}

const CycloneMap = ({cyclone, details}) => {
  return (
    <div className="card m-3">
      <div className="card-header">
        <h4>Map</h4>
      </div>
      <div className="card-body">
        <MapContainer center={center} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Trajectory cyclone={cyclone} details={details} color={"red"} />
        </MapContainer>
      </div>
    </div>
  );
};

export default CycloneMap;
