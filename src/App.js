import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header.component";
import Dashboard from "./components/dashboard.component";

const App = () => {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
