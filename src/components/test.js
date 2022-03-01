import {MapContainer, Marker, Popup, TileLayer, Polyline} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {createElementHook, useLeafletContext} from "@react-leaflet/core";
import L from "leaflet";
import {useEffect, useRef} from "react";

function getBounds(props) {
  return L.latLng(props.center).toBounds(props.size);
}

function createSquare(props, context) {
  return {instance: new L.Rectangle(getBounds(props)), context};
}

function updateSquare(instance, props, prevProps) {
  if (props.center !== prevProps.center || props.size !== prevProps.size) {
    instance.setBounds(getBounds(props));
  }
}

const useSquareElement = createElementHook(createSquare, updateSquare);

function Square(props) {
  const context = useLeafletContext();
  const elementRef = useSquareElement(props, context);

  useEffect(() => {
    const container = context.layerContainer || context.map;
    container.addLayer(elementRef.current.instance);

    return () => {
      container.removeLayer(elementRef.current.instance);
    };
  }, []);

  return null;
}

const center = [-21, 70];
const zoom = 5;

function getLatLongs(props) {
  let coords = [];
  props.details.map(data => coords.push(L.latLng(data.coord.x, data.coord.y)));
  return coords;
}

function createTrajectory(props, context) {
  return {instance: new L.Polyline(getLatLongs(props)), context};
}

function updateTrajectory(instance, props, prevProps) {
  if (props.details.length !== prevProps.details.length) {
    instance.setLatLngs(getLatLongs(props));
  }
}

const useTrajectoryElement = createElementHook(
  createTrajectory,
  updateTrajectory
);

function Trajectory(props) {
  const context = useLeafletContext();
  const elementRef = useTrajectoryElement(props, context);

  useEffect(() => {
    const container = context.layerContainer || context.map;
    container.addLayer(elementRef.current.instance);

    return () => {
      container.removeLayer(elementRef.current.instance);
    };
  }, []);

  return null;
}

function Trajectory2(props) {
  const TrajectoryRef = useRef();
  let latlongs = [];

  useEffect(() => {
    latlongs = getLatLongs(props);
  }, []);

  return <Polyline ref={TrajectoryRef} positions={latlongs} color={"red"} />;
}

const MyMap = ({cyclone, details}) => {
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
          <Square center={center} size={100000} />
          <Trajectory2 cyclone={cyclone} details={details} color={"red"} />
        </MapContainer>
      </div>
    </div>
  );
};

export default MyMap;
