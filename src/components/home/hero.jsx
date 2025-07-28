import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroVideo from "../../assets/img/hero-vid.mp4";

function Hero() {
  const [name, setName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedOccupations, setSelectedOccupations] = useState([]);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false); // 👈 New state
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const STATES = ['ACT', 'NSW', 'VIC', 'WA', 'QLD', 'SA', 'NT', 'TAS'];
  const OCCUPATIONS = [
    'Air Conditioning & Refrigeration', 'Arborist', 'Architect', 'Asbestos Assessor',
    'Asbestos Removalist', 'Bricklayer', 'Builder', 'Building Designer', 'Building Inspector',
    'Building Practitioner', 'Building Surveyor', 'Cabinet Maker', 'Carpenter', 'Certifier',
    'Cladder', 'Concreter', 'Decorator', 'Demolisher', 'Design Practitioner', 'Drainer',
    'Electrician', 'Erector', 'Excavator', 'Fencer', 'Fire protection Specialist/ Technician',
    'Floor Installer', 'Gasfitter', 'Glazier', 'Hot water Specialist/ Technician', 'Joiner',
    'Land Surveyor', 'Land Valuer', 'Landscaper', 'Metal Fabricator', 'Owner Builder',
    'Painter', 'Piler', 'Plasterer', 'Plumber', 'Pool Builder', 'Professional Engineer',
    'Renovator', 'Roofer', 'Slater', 'Stonemason', 'Tiler', 'Under Pinner', 'Water Proofer', 'Work Assessor'
  ];

  const handleStateChange = (e) => {
    const value = e.target.id.replace('state-', '');
    setSelectedStates(prev =>
      e.target.checked ? [...prev, value] : prev.filter(s => s !== value)
    );
  };

  const handleOccupationChange = (e) => {
    const value = e.target.id;
    setSelectedOccupations(prev =>
      e.target.checked ? [...prev, value] : prev.filter(o => o !== value)
    );
  };

  const handleClearFilters = () => {
    setSelectedStates([]);
    setSelectedOccupations([]);
    document.querySelectorAll('.advanced-search input[type=checkbox]').forEach(cb => cb.checked = false);
  };

  const handleSearch = async () => {
    const params = new URLSearchParams();
    if (name) params.append('name', name);
    if (licenseNumber) params.append('license_number', licenseNumber);
    if (selectedStates.length > 0) {
      selectedStates.forEach(state => params.append('states[]', state));
    }
    if (selectedOccupations.length > 0) {
      selectedOccupations.forEach(occ => params.append('occupations[]', occ));
    }

    try {
      const res = await fetch(`${BASE_URL}/building-licenses-search?${params.toString()}`);
      const data = await res.json();

      if (Array.isArray(data.data)) {
        navigate('/list', { state: { results: data.data } });
      } else {
        console.error("Unexpected API response format:", data);
        navigate('/list', { state: { results: [] } });
      }
    } catch (err) {
      console.error("Search API error:", err);
      navigate('/list', { state: { results: [] } });
    }
  };

  return (
    <section className='main-hero'>
      <video playsInline autoPlay muted loop>
        <source src={HeroVideo} type="video/mp4" />
      </video>

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9'>
            <div className='text-center'>
              <h1 className='hero-title'>
                Free Online Licence Verification of All Trade Professionals Across Australia
              </h1>
              <p className='hero-p'>
                Search Over 1.5 Million License Records Covering 31 Licensing Bodies and 47 Occupations
              </p>
            </div>

            <div className='main-form'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label className='label-top'>Licensee/Individual or Business/Company Name</label>
                    <input
                      className='form-control'
                      placeholder='James Smith'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='form-group'>
                    <label className='label-top'>Licensee Number</label>
                    <input
                      className='form-control'
                      placeholder='CBD4557'
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className='col-lg-2'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-light w-100'
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>

                {/* Advanced Search (React-controlled) */}
                <div className="advanced-search mt-4">
                  <div className="mb-3">
                    <button
                      type="button"
                      className="btn btn-advance"
                      onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                    >
                      {isAdvancedOpen ? 'Hide Advanced Search' : 'Advanced Search'}
                    </button>
                  </div>

                  <div
                    className={`collapse-section ${isAdvancedOpen ? 'show' : ''}`}
                    style={{
                      display: isAdvancedOpen ? 'block' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div>
                      {/* State Filter */}
                      <h5>Filter by State</h5>
                      <hr />
                      <div className="mb-3 d-flex flex-wrap gap-3">
                        {STATES.map((state) => (
                          <div className="form-check" key={state}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`state-${state}`}
                              onChange={handleStateChange}
                            />
                            <label className="form-check-label" htmlFor={`state-${state}`}>{state}</label>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-warning ms-3"
                          onClick={handleClearFilters}
                        >
                          Clear All
                        </button>
                      </div>

                      {/* Occupation Filter */}
                      <h5>Filter by Occupation</h5>
                      <hr />
                      <div className="row row-cols-2 row-cols-md-3 g-3">
                        {Array.from({ length: Math.ceil(OCCUPATIONS.length / 3) }, (_, colIdx) => (
                          <div className="col" key={colIdx}>
                            {OCCUPATIONS.slice(colIdx * 3, colIdx * 3 + 3).map((occupation) => {
                              const id = occupation.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                              return (
                                <div className="form-check" key={occupation}>
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={id}
                                    onChange={handleOccupationChange}
                                  />
                                  <label className="form-check-label" htmlFor={id}>
                                    {occupation}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Advanced Search */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
