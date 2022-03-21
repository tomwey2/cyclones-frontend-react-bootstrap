import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header.component";
import Dashboard from "./components/dashboard.component";
import Statistics from "./components/statistics.component";

const App = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showStatistics, setShowStatistics] = useState(false);

  const toggleShowDashboard = () => {
    setShowStatistics(false);
    setShowDashboard(true);
  };

  const toggleShowStatistics = () => {
    setShowDashboard(false);
    setShowStatistics(true);
  };

  return (
    <div>
      <Header
        toggleShowDashboard={toggleShowDashboard}
        toggleShowStatistics={toggleShowStatistics}
      />
      <div className="col d-flex flex-column h-sm-100">
        <main className="row overflow-auto">
          <div className="col pt-4">
            {showDashboard && <Dashboard />}
            {showStatistics && <Statistics />}
          </div>
        </main>
        <footer className="row bg-light py-4 mt-auto">
          <div className="col"> Footer content here... </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
