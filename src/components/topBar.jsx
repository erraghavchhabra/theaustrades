import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <section className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 my-auto">
            <Link to="/">
              <img
                src={Logo}
                className="img-fluid logo-main"
                alt="theaustrades.com"
              />
            </Link>
          </div>
          <div className="col-lg-8 col-12 text-lg-end text-center  my-auto">
            <ul className="list-inline topbar-ul mb-0">
              <li className="list-inline-item">
                <Link className="btn-light" to="/login">
                  Login
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="btn-dark" to="/register">
                  Register
                </Link>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn twitter"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn instagram"
                >
                 <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn linkedin"
                >
                <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
