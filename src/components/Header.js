/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from "react-router-dom";
import { CiBookmark, CiYoutube, CiUser, CiHome } from "react-icons/ci";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          themoviez<span>lab</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white px-3"
                aria-current="page"
                to="/"
              >
                <CiHome style={{ fontSize: "20px", marginRight: "8px" }} />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white px-3"
                aria-current="page"
                to="/movie"
              >
                <CiYoutube style={{ fontSize: "20px", marginRight: "8px" }} />
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/watchlist"
                className="nav-link text-white px-3"
                aria-current="page"
              >
                <CiBookmark style={{ fontSize: "20px", marginRight: "8px" }} />
                WacthList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white px-3"
                aria-current="page"
                to="/contact"
              >
                <CiUser style={{ fontSize: "20px", marginRight: "8px" }} />
                Contact us
              </NavLink>
            </li>
          </ul>
          <button className="nav-btn">Join Us</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
