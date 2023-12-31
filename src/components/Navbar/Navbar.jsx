import React from "react";
import "../Navbar/Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-scroll";
//import Logo2 from "/logo.png";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm " id="nav_general">
          <div className="container-fluid">
            <a className="navbar-brand" id="nav_logo" href="#">
              Sapphire Dragon
            </a>
            <button
              className="navbar-toggler"
              id="btn_nav"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span id="btn_icon">
                {/* <img src={Logo2} style={{width:"30px", height:"30px"}} alt="" /> */}
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="hero"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link"
                    id="links_nav"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="about"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link"
                    id="links_nav"
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="skills"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link"
                    id="links_nav"
                  >
                    Proud Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="project"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link"
                    id="links_nav"
                  >
                    Work Projects
                  </Link>
                </li>
                <Link
                  to="contact"
                  smooth={true}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  id="links_nav"
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
