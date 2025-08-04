import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListCard from "../components/listCard";

const RESULTS_PER_PAGE = 10;

function List() {
  const location = useLocation();
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const query = location.state?.query || {};

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        if (location.state?.results) {
          setResults(location.state.results);
        } else {
          const response = await fetch(`${BASE_URL}/building-licenses-search`);
          const data = await response.json();
          if (Array.isArray(data.data)) {
            setResults(data.data);
          } else {
            setResults([]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch results:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [location.state, BASE_URL]);

  // Pagination logic
  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const paginatedResults = results.slice(startIndex, startIndex + RESULTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="inner-wrap">
      <section className="section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row row-srch">
                <div className="col-md-5">
                  <h2 className="main-heading">Search List</h2>
                </div>
                <div className="col-md-7">
                  <ul className="list-inline">
                    {query.name && (
                      <li className="list-inline-item">
                        <strong>Name:</strong> {query.name}
                      </li>
                    )}
                    {query.licenseNumber && (
                      <li className="list-inline-item">
                        <strong>License #:</strong> {query.licenseNumber}
                      </li>
                    )}
                    {query.selectedStates?.length > 0 && (
                      <li className="list-inline-item">
                        <strong>States:</strong> {query.selectedStates.join(", ")}
                      </li>
                    )}
                    {query.selectedOccupations?.length > 0 && (
                      <li className="list-inline-item">
                        <strong>Occupations:</strong> {query.selectedOccupations.join(", ")}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="row mt-4">
            <div className="col-lg-8">
              {loading ? (
                <p>Loading...</p>
              ) : paginatedResults.length === 0 ? (
                <p>No results found.</p>
              ) : (
                <>
                  {paginatedResults.map((item) => (
                    <ListCard
                      key={item.id || item.license_number}
                      data={item}
                    />
                  ))}

                  {/* Pagination Controls */}
                  <div className="pagination mt-4 d-flex justify-content-center flex-wrap gap-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        className={`btn btn-sm ${
                          currentPage === i + 1
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}

                    <button
                      className="btn btn-sm btn-outline-secondary"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
