import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ initialQuery = {}, onResults, variant = "default" }) {
  const [name, setName] = useState(initialQuery.name || '');
  const [licenseNumber, setLicenseNumber] = useState(initialQuery.licenseNumber || '');
  const [selectedStates, setSelectedStates] = useState(initialQuery.selectedStates || []);
  const [selectedOccupations, setSelectedOccupations] = useState(initialQuery.selectedOccupations || []);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const navigate = useNavigate();

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

  const handleSearch = () => {
    const query = {
      name,
      licenseNumber,
      selectedStates,
      selectedOccupations
    };

    if (onResults) {
      // On List page -> send query only, let List.jsx handle fetch
      onResults(query);
    } else {
      // On Hero page -> navigate with query in state
      navigate('/list', { state: { query } });
    }
  };

  return (
    <div className={`main-form search-form-${variant}`}>
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
            <button type='button' className='btn-light w-100' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        {/* Advanced Search */}
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

          {isAdvancedOpen && (
            <div className="collapse-section">
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
                      checked={selectedStates.includes(state)}
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
                            checked={selectedOccupations.includes(id)}
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
          )}
        </div>
        {/* End Advanced Search */}
      </div>
    </div>
  );
}

export default SearchBar;
