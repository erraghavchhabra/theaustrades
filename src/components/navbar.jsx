import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

function Navbar() {
  // ──────────────────────────────────────────────────────────────
  // 1. State to control the Bootstrap‑style collapse on mobile
  // ──────────────────────────────────────────────────────────────
  const [collapsed, setCollapsed] = useState(true);

  const navList = [
    { label: "Verify a Licence", href: "#" },
    { label: "Licensing Bodies Information", href: "#", isMegaMenu: true },
    { label: "Occupations Information", href: "#" },
    { label: "Find a Licensed Tradie", href: "/find_a_tradie" },
    { label: "List Your Business", href: "/for_business" },
  ];

  // ──────────────────────────────────────────────────────────────
  // 2. Sticky navbar on scroll (unchanged)
  // ──────────────────────────────────────────────────────────────
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ──────────────────────────────────────────────────────────────
  // 3. Toggle mega‑menu items on mobile (unchanged)
  // ──────────────────────────────────────────────────────────────
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
    return () => document.removeEventListener("click", handleMobileMegaToggle);
  }, []);

  // Helper: close menu after clicking any link (mobile only)
  const handleNavItemClick = () => {
    if (window.innerWidth < 992) setCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} className="img-fluid logo-mob" alt="theaustrades.com" />
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div
          id="navbarNav"
          className={`collapse navbar-collapse justify-content-center ${
            collapsed ? "" : "show"
          }`}
        >
          <ul className="navbar-nav custom-nav-list">
            {navList.map((item, index) => (
              <li
                className={`nav-item custom-nav-item ${item.isMegaMenu ? "position-static" : ""}`}
                key={index}
              >
                {/* Regular link vs. mega‑menu toggle */}
                {item.isMegaMenu ? (
                  <Link
                    className="nav-link custom-link mega-toggle"
                    to={item.href}
                    onClick={handleNavItemClick}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    className="nav-link custom-link"
                    to={item.href}
                    onClick={handleNavItemClick}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega‑menu dropdown */}
                {item.isMegaMenu && (
                  <div className="dropdown-menu mega-dropdown">
                    <ul>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 1</Link></li>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 2</Link></li>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 3</Link></li>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 4</Link></li>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 5</Link></li>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 6</Link></li>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 7</Link></li>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 8</Link></li>
                      <li><Link to="#" onClick={handleNavItemClick}>Body 9</Link></li>
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
