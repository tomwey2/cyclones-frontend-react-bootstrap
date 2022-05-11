const CycloneDetails = ({cyclone, details, cyclonesTypes}) => {
  const cyclonesTypeText = id => {
    if (id > 0 && id < cyclonesTypes.length) {
      return cyclonesTypes[id].text_fr;
    }
    return "";
  };

  const CycloneRowHeader = () => (
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Lat/Long</th>
      <th scope="col">CI</th>
      <th scope="col">Pressure</th>
      <th scope="col">Wind km/h</th>
      <th scope="col">Gusts km/h</th>
      <th scope="col">Intensity</th>
    </tr>
  );

  const CycloneRow = ({data}) => (
    <tr>
      <td>{data.data_date}</td>
      <td>
        ({data.coord.x}, {data.coord.y})
      </td>
      <td>{data.ci}</td>
      <td>{data.pressure}</td>
      <td>{data.wind_max}</td>
      <td>{data.gusts}</td>
      <td>{data.type_id !== undefined && cyclonesTypeText(data.type_id)}</td>
    </tr>
  );

  return (
    <div className="card m-3">
      <div className="card-header">
        <h5>Cyclone trajectory data of cyclone {cyclone.name}</h5>
      </div>
      <div className="card-body">
        <table className="table table-sm table-success table-striped">
          <thead>
            <CycloneRowHeader />
          </thead>
          <tbody>
            {details.map(data => {
              return <CycloneRow key={data.id} data={data} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CycloneDetails;
