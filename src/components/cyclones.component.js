const Cyclones = ({cyclones, onSelectCyclone}) => {
  const CycloneRowHeader = () => (
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Start</th>
      <th scope="col">End</th>
    </tr>
  );

  const CycloneRow = ({data}) => (
    <tr onClick={() => onSelectCyclone(data)}>
      <td>{data.index}</td>
      <td>{data.name}</td>
      <td>{data.start_date}</td>
      <td>{data.end_date}</td>
    </tr>
  );

  return (
    <div>
      <table className="table table-hover fs-6">
        <thead>
          <CycloneRowHeader />
        </thead>
        <tbody>
          {cyclones.map(data => {
            return <CycloneRow key={data.id} data={data} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cyclones;
