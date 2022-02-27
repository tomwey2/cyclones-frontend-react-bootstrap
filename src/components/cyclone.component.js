import {useState, useEffect} from "react";
import CyclonesService from "../services/cyclones.service";

const CycloneDetails = ({cyclone, details}) => {
  return (
    <div className="card m-3">
      <div className="card-header">
        <h5>Cyclone trajectory data of cyclone {cyclone.name}</h5>
      </div>
      <div className="card-body">
        <table className="table table-sm table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Coordinate</th>
              <th scope="col">CI</th>
              <th scope="col">Pressure</th>
              <th scope="col">Wind</th>
              <th scope="col">Gusts</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {details.map(data => {
              return (
                <tr id={data.id}>
                  <td>{data.data_date}</td>
                  <td>
                    (x={data.coord.x}, y={data.coord.y})
                  </td>
                  <td>{data.ci}</td>
                  <td>{data.pressure}</td>
                  <td>{data.wind_max}</td>
                  <td>{data.gusts}</td>
                  <td>{data.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CycloneDetails;
