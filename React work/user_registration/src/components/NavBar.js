import React from "react";
// import "../components-css/NavBarCss.css";
import { Link } from "react-router-dom";

export default function Home() {
  const navbarStyle = {
    backgroundColor: "#F28123", // Set the background color here
  };

  const textStyle = {
    color: "white",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg " style={navbarStyle} id="NavBar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={textStyle}>
            AapKa Bazzar
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/our-store">
                  Our store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/sign-up">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">
                  Sign In
                </Link>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}
