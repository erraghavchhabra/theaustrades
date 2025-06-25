import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <section className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-4 my-auto">
            <Link to="/">
              <img
                src={Logo}
                className="img-fluid logo-main"
                alt="theaustrades.com"
              />
            </Link>
          </div>
          <div className="col-8 text-end  my-auto">
            <ul className="list-inline topbar-ul mb-0">
              <li className="list-inline-item">
                <Link className="btn-light" to="/find_a_tradie">
                  Find A Tradie
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="btn-dark" to="/for_business">
                  List Your Business
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
