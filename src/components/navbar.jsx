import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navList = [
    {
      label: "Verify a Licence",
      href: "#",
    },
    {
      label: "Licensing Bodies Information",
      href: "#",
    },
    {
      label: "Occupations Information",
      href: "#",
    },
    {
      label: "Find a Licensed Tradie",
      href: "/find_a_tradie",
    },
    {
      label: "List Your Business",
      href: "/for_business",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container justify-content-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav custom-nav-list">
            {navList?.map((label, index) => (
              <li className="nav-item custom-nav-item" key={index}>
                <Link className="nav-link custom-link" to={label.href}>
                  {label.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
