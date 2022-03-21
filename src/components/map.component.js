import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  CircleMarker
} from "react-leaflet";

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

function getLatLongs2(props) {
  let coords = [];
  props.details.map(data =>
    coords.push({lat: data.coord.x, lng: data.coord.y})
  );
  return coords;
}

const cycloneProps = [
  {type: 0, color: "Black", width: 1}, // undefined
  {type: 1, color: "Blue", width: 1}, // ZP
  {type: 2, color: "Green", width: 1}, // Dsub
  {type: 3, color: "Blue", width: 1}, // Dpost
  {type: 4, color: "Blue", width: 1}, // Dextra
  {type: 5, color: "Grey", width: 1}, // Ddiss
  {type: 6, color: "Grey", width: 1}, // DsurTerr
  {type: 7, color: "Yellow", width: 2}, // PT
  {type: 8, color: "Yellow", width: 2}, // DT
  {type: 9, color: "Orange", width: 3}, // TTM
  {type: 10, color: "Orange", width: 3}, // FTT
  {type: 11, color: "Red", width: 5}, // CT
  {type: 12, color: "DarkRed", width: 5}, // CTI
  {type: 13, color: "Black", width: 8} // CTII
];

function getLines(props) {
  let lines = [];
  for (let i = 1; i < props.details.length; i++) {
    const p1 = props.details[i - 1].coord;
    const p2 = props.details[i].coord;
    const typeId =
      props.details[i].type_id !== undefined ? props.details[i].type_id : 0;
    lines.push({
      color: cycloneProps[typeId].color,
      width: cycloneProps[typeId].width,
      coord: [
        {lat: p1.x, lng: p1.y},
        {lat: p2.x, lng: p2.y}
      ]
    });
  }
  return lines;
}

function Trajectory(props) {
  const lines = getLines(props);
  return (
    <>
      {lines.map((line, index) => (
        <Polyline
          key={index}
          color={line.color}
          positions={line.coord}
          weight={line.width}
        />
      ))}
    </>
  );
}

const CycloneMap = ({cyclone, details}) => {
  return (
    <div className="card m-3">
      <div className="card-header">
        <h5>Map of Cyclone {cyclone.name}</h5>
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
