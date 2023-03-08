import React from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div>
      {" "}
      <div>
        <nav className="navbar navbar-expand-lg text-uppercase menu fs-5 ">
          <div className="container-fluid animate__animated animate__fadeInLeft ">
            <Link to="/" className="navbar-brand text-white fs-2 ">
              DashBoard
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/zonegames" className="nav-link active text-white">
                    Games
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/zonecellphones" className="nav-link active text-white">
                    CellPhones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
