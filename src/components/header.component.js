import PropTypes from "prop-types";

const Header = ({logo}) => {
  return (
    <nav className="navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{logo}</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Data
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Statistic
            </a>
          </li>
        </ul>
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
