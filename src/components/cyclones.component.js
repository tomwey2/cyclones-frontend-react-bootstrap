const Cyclones = ({cyclones, onSelectCyclone}) => {
  return (
    <div>
      <table className="table table-hover fs-6">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">start</th>
            <th scope="col">end</th>
          </tr>
        </thead>
        <tbody>
          {cyclones.map(data => {
            return (
              <tr
                id={data.id}
                key={data.id}
                onClick={() => onSelectCyclone(data)}
              >
                <td>{data.index}</td>
                <td>{data.name}</td>
                <td>{data.start_date}</td>
                <td>{data.end_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cyclones;
