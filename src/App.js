import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header.component";
import Dashboard from "./components/dashboard.component";

const App = () => {
  return (
    <div>
      <Header />
      <div className="col d-flex flex-column h-sm-100">
        <main className="row overflow-auto">
          <div className="col pt-4">
            <Dashboard />
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
