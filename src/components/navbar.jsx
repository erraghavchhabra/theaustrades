import React from 'react';

function Navbar() {
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

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav custom-nav-list">
            {['Verify a Licence', 'Licensing Bodies Information', 'Occupations Information', 'Find a Licensed Tradie' , 'List Your Business'].map((label) => (
              <li className="nav-item custom-nav-item" key={label}>
                <a className="nav-link custom-link" href="#">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
