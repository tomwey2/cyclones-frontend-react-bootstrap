import {House, Speedometer, GraphUp} from "react-bootstrap-icons";
import PropTypes from "prop-types";

const Header = ({logo}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand fs-4 fw-bold ms-4">Cyclones</a>
      <div className="ms-auto d-none d-sm-flex">
        <button class="btn btn-dark fs-5 fw-bold" type="button">
          <Speedometer /> <span className="ms-2">Dashboard</span>
        </button>
        <button class="btn btn-dark fs-5 fw-bold ms-4 me-4" type="button">
          <GraphUp /> <span className="ms-2">Statistik</span>
        </button>
      </div>
      <div className="ms-auto d-sm-none">
        <button class="btn btn-dark fs-5 fw-bold " type="button">
          <Speedometer />
        </button>
        <button class="btn btn-dark fs-5 fw-bold ms-4 me-4" type="button">
          <GraphUp />
        </button>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  logo: "Cyclones data of Indian Ocean"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
