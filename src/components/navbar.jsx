import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  const navList = [
    { label: "Verify a Licence", href: "#" },
    { label: "Licensing Bodies Information", href: "#", isMegaMenu: "licensing" },
    { label: "Occupations Information", href: "#", isMegaMenu: "occupations" },
    { label: "Find a Licensed Tradie", href: "/find_a_tradie" },
    { label: "List Your Business", href: "/for_business" },
  ];

  // ✅ Sticky navbar on scroll
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

  // ✅ Mega menu toggle for mobile
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

  const handleNavItemClick = (href) => {
    if (window.innerWidth < 992) {
      const isSameRoute = href === "#" || href === location.pathname;
      if (!isSameRoute) setCollapsed(true);
    }
  };

  // ✅ Licensing Bodies List
  const licensingBodies = [
    "NT Architects Board",
    "NT Plumbers and Drainers Licensing Board",
    "NT Building Practitioners Board",
    "NT WorkSafe",
    "NT Surveyors Board",
    "ACT Government",
    "WorkSafe ACT",
    "NSW Architects Registration Board",
    "Verify NSW",
    "Board of Architects of Tasmania",
    "TAS Department of Justice",
    "WorkSafe Tasmania",
    "TAS Register of Surveyors",
    "EnergySafe VIC",
    "WorkSafe VIC",
    "Architects Registration Board of Victoria",
    "Building and Plumbing Commission VIC",
    "Surveyors Registration Board of Victoria",
    "SA Consumer and Business Services",
    "SafeWork SA",
    "Architectural Practice Board of South Australia",
    "Surveyors Board of South Australia",
    "PlanSA",
    "Architects Board of Western Australia",
    "The Land Surveyors Licensing Board of Western Australia",
    "Department of Energy, Mines, Industry Regulation and Safety",
    "Queensland Building and Construction Commission",
    "Board of Architects of Queensland",
    "WorkSafe QLD",
    "Surveyors Board of Queensland",
    "Queensland Government",
  ];

  // ✅ Occupations List (will be sorted alphabetically)
  const occupations = [
    "Builder",
    "Bricklayer",
    "Stonemason",
    "Cladder",
    "Carpenter",
    "Joiner",
    "Decorator",
    "Plasterer",
    "Excavator",
    "Glazier",
    "Fencer",
    "Floor Installer",
    "Erector",
    "Concreter",
    "Glazier",
    "Renovator",
    "Metal Fabricator",
    "Painter",
    "Slater",
    "Tiler",
    "Landscaper",
    "Water Proofer",
    "Under Pinner",
    "Piler",
    "Roofer",
    "Certifier",
    "Land Valuer",
    "Manager",
    "Electrician",
    "Air Conditioning & Refrigeration",
    "Hot water Specialist/ Technician",
    "Fire protection Specialist/ Technician",
    "Work Assessor",
    "Professional Engineer",
    "Building Practitioner",
    "Building Designer",
    "Building Inspector",
    "Design Practitioner",
    "Owner Builder",
    "Plumber",
    "Gasfitter",
    "Architect",
    "Building Surveyor",
    "Arborist",
    "Land Surveyor",
    "Asbestos Removalist",
    "Asbestos Assessor",
    "Demolisher",
  ];

  // ✅ Helper to create slugs for links
  const createSlug = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

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
                className={`nav-item custom-nav-item ${
                  item.isMegaMenu ? "position-static" : ""
                }`}
                key={index}
              >
                {/* Regular link vs. mega menu toggle */}
                {item.isMegaMenu ? (
                  <Link
                    className="nav-link custom-link mega-toggle"
                    to={item.href}
                    onClick={() => handleNavItemClick(item.href)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    className="nav-link custom-link"
                    to={item.href}
                    onClick={() => handleNavItemClick(item.href)}
                  >
                    {item.label}
                  </Link>
                )}

                {/* ✅ Mega menu dropdown for Licensing Bodies */}
                {item.isMegaMenu === "licensing" && (
                  <div className="dropdown-menu mega-dropdown">
                    <ul>
                      {licensingBodies.map((body, idx) => {
                        const href = `/licensing/${createSlug(body)}`;
                        return (
                          <li key={idx}>
                            <Link to={href} onClick={() => handleNavItemClick(href)}>
                              {body}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* ✅ Mega menu dropdown for Occupations (sorted A → Z) */}
                {item.isMegaMenu === "occupations" && (
                  <div className="dropdown-menu mega-dropdown">
                    <ul>
                      {occupations
                        .slice() // copy array
                        .sort((a, b) => a.localeCompare(b)) // ✅ alphabetical sort
                        .map((job, idx) => {
                          const href = `/occupations/${createSlug(job)}`;
                          return (
                            <li key={idx}>
                              <Link to={href} onClick={() => handleNavItemClick(href)}>
                                {job}
                              </Link>
                            </li>
                          );
                        })}
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
