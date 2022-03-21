const Season = ({seasons, onChangeSeason}) => {
  return (
    <div className="row g-3 align-items-center">
      <div className="col-auto">
        <label htmlFor="seasonlist">Select season:</label>
      </div>

      <div className="col-auto">
        <select
          id="seasonlist"
          className="form-select"
          onChange={onChangeSeason}
        >
          {seasons.map(data => {
            return (
              <option key={data.id} value={data.id}>
                {data.from_year} - {data.until_year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Season;
