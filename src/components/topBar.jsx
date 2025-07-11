import React, { useEffect, useState, useRef } from "react";
import Logo from "../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";

function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsLoggedIn(true);
      try {
        setUser(JSON.parse(userData));
      } catch {
        setUser(null);
      }
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await fetch("https://rehabhospitality.com/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token, // or `Bearer ${token}` if needed
        },
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <section className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 my-auto">
            <Link to="/">
              <img src={Logo} className="img-fluid logo-main" alt="logo" />
            </Link>
          </div>

          <div className="col-lg-8 col-12 text-lg-end text-center my-auto">
            <ul className="list-inline topbar-ul mb-0">
              {!isLoggedIn ? (
                <>
                  <li className="list-inline-item">
                    <Link className="btn-light" to="/login">Login</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="btn-dark" to="/register">Register</Link>
                  </li>
                </>
              ) : (
                <li className="list-inline-item m-drop dropdown" ref={dropdownRef}>
                  <button
                    className="user-toggle-btn"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div className="user-icon">
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <span className="fw-semibold text-dark">
                     {user?.name || "User"} {user?.last_name || ""}

                    </span>
                    <i className="bi bi-chevron-down ms-2"></i>
                  </button>

                  <ul className={`dropdown-menu dropdown-menu-end shadow ${dropdownOpen ? "show" : ""}`}>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <i className="bi bi-person-circle me-2"></i> My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/bookmarks">
                        <i className="bi bi-bookmark-heart me-2"></i> Bookmarks
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/change-password">
                        <i className="bi bi-shield-lock me-2"></i> Change Password
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                      </button>
                    </li>
                  </ul>
                </li>
              )}

              {/* Social Icons (always visible) */}
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="circle-btn facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="circle-btn twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="circle-btn instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="circle-btn linkedin">
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
