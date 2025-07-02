import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

function Navbar() {
  const navList = [
    {
      label: "Verify a Licence",
      href: "#",
    },
    {
      label: "Licensing Bodies Information",
      href: "#",
      isMegaMenu: true,
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

  // Sticky navbar on scroll
  useEffect(() => {
    const navbar = document.querySelector(".custom-navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mega menu on mobile using event delegation
  useEffect(() => {
    const handleMobileMegaToggle = (e) => {
      if (window.innerWidth >= 992) return;

      const toggle = e.target.closest(".mega-toggle");

      if (toggle) {
        e.preventDefault();
        const dropdown = toggle.nextElementSibling;
        if (dropdown && dropdown.classList.contains("mega-dropdown")) {
          dropdown.classList.toggle("show");
        }
      }
    };

    document.addEventListener("click", handleMobileMegaToggle);

    return () => {
      document.removeEventListener("click", handleMobileMegaToggle);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            className="img-fluid logo-mob"
            alt="theaustrades.com"
          />
        </Link>
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
            {navList.map((item, index) => (
              <li
                className={`nav-item custom-nav-item ${
                  item.isMegaMenu ? "position-static" : ""
                }`}
                key={index}
              >
                {item.isMegaMenu ? (
                  <Link
                    className="nav-link custom-link mega-toggle"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link className="nav-link custom-link" to={item.href}>
                    {item.label}
                  </Link>
                )}

                {item.isMegaMenu && (
                  <div className="dropdown-menu mega-dropdown">
                    <ul>
                      <li><Link to="#">Body 1</Link></li>
                      <li><Link to="#">Body 2</Link></li>
                      <li><Link to="#">Body 3</Link></li>
                      <li><Link to="#">Body 4</Link></li>
                      <li><Link to="#">Body 5</Link></li>
                      <li><Link to="#">Body 6</Link></li>
                      <li><Link to="#">Body 7</Link></li>
                      <li><Link to="#">Body 8</Link></li>
                      <li><Link to="#">Body 9</Link></li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
