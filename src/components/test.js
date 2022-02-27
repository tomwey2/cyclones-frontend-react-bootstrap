import React from "react";
import L from "leaflet";

const Map = () => {
  // create map
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    mapRef.current = L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add layer  const layerRef = React.useRef(null);  React.useEffect(() => {    layerRef.current = L.layerGroup().addTo(mapRef.current);  }, []);
  return <div id="map" />;
};

export default Map;
