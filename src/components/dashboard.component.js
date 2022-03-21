import {useState, useEffect} from "react";
import SeasonsService from "../services/seasons.service";
import CyclonesService from "../services/cyclones.service";
import CyclonesTypesService from "../services/cyclonesTypes.service";
import Season from "./season.component";
import CycloneDetails from "./cyclone.component";
import Cyclones from "./cyclones.component";
import CycloneMap from "./map.component";
import MyMap from "./test";

const Dashboard = () => {
  const [seasons, setSeasons] = useState([]);
  const [currentSeasonId, setCurrentSeasonId] = useState(undefined);
  const [cyclones, setCyclones] = useState([]);
  const [currentCyclone, setCurrentCyclone] = useState(undefined);
  const [details, setDetails] = useState([]);
  const [cyclonesTypes, setCyclonesTypes] = useState([]);

  const onChangeSeason = e => {
    const seasonId = e.target.value;
    console.log("call onChangeSeason: " + seasonId);
    setCurrentSeasonId(seasonId);
  };

  const onSelectCyclone = cyclone => {
    console.log("call onSelectCyclone: " + cyclone.id);
    setCurrentCyclone(cyclone);
  };

  useEffect(() => {
    console.log("useEffect []");
    fetchSeasons();
    fetchCyclonesTypes();
  }, []);

  useEffect(() => {
    console.log(`useEffect [currentSeasonId=${currentSeasonId}]`);
    fetchCyclones();
    setCurrentCyclone(undefined);
  }, [currentSeasonId]);

  useEffect(() => {
    console.log(`useEffect [currentCyclone=${currentCyclone}]`);
    fetchDetails();
  }, [currentCyclone]);

  const fetchCyclonesTypes = async () => {
    const response = await CyclonesTypesService.getAll();
    setCyclonesTypes(response.data);
  };

  const fetchSeasons = async () => {
    console.log("fetchSeasons");
    const response = await SeasonsService.getAll();
    setSeasons(response.data);
    setCurrentSeasonId(response.data[0].id);
    console.log(response.data);
  };

  const fetchCyclones = async () => {
    if (currentSeasonId !== undefined) {
      console.log("fetchCyclones of season " + currentSeasonId);
      const response = await CyclonesService.getAllInSeason(currentSeasonId);
      setCyclones(response.data);
      if (response.data.length > 0) {
        setCurrentCyclone(response.data[0]);
      }
      console.log(response.data);
    }
  };

  const fetchDetails = async () => {
    if (currentCyclone !== undefined) {
      console.log("fetchDetails");
      const response = await CyclonesService.getDetails(currentCyclone.id);
      setDetails(response.data);
      console.log(response.data);
    } else {
      setDetails([]);
    }
  };

  return (
    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2">
      <div className="col col-lg-4">
        <div className="card m-3">
          <div className="card-header">
            <h5>List of Cyclones</h5>
            <Season seasons={seasons} onChangeSeason={onChangeSeason} />
          </div>
          <div className="card-body">
            <Cyclones cyclones={cyclones} onSelectCyclone={onSelectCyclone} />
          </div>
        </div>
      </div>

      <div className="col col-lg-8">
        <div className="row row-cols-1">
          <div className="col">
            <CycloneMap cyclone={currentCyclone} details={details} />
          </div>
          <div className="col">
            {currentCyclone !== undefined && (
              <CycloneDetails
                cyclone={currentCyclone}
                details={details}
                cyclonesTypes={cyclonesTypes}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
