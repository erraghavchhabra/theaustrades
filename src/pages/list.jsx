import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchForm";
import ListCard from "../components/listCard";

function List() {
  const location = useLocation();
  const { query: initialQuery = {} } = location.state || {};

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Helper to build proper URL params
  const buildParams = (searchQuery) => {
    const params = new URLSearchParams();
    Object.entries(searchQuery || {}).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          params.append(`${key}[]`, typeof v === "object" ? v.value : v);
        });
      } else if (typeof value === "object" && value !== null) {
        params.append(key, value.value ?? "");
      } else if (value !== undefined && value !== null && value !== "") {
        params.append(key, value);
      }
    });
    return params;
  };

  // Fetch data from API
  const fetchData = async (page = 1, searchQuery = query) => {
    try {
      setLoading(true);

      const queryParams = buildParams(searchQuery);
      queryParams.append("page", page);

      console.log("Fetching:", `${BASE_URL}/building-licenses-search?${queryParams.toString()}`);

      const res = await fetch(`${BASE_URL}/building-licenses-search?${queryParams.toString()}`);
      const data = await res.json();

      setResults(data.data || []);
      setCurrentPage(data.current_page || 1);
      setLastPage(data.last_page || 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Run when query changes
  useEffect(() => {
    fetchData(1, query);
  }, [query]);

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(lastPage, currentPage + 2);

    if (currentPage <= 3) {
      end = Math.min(lastPage, maxVisible);
    }
    if (currentPage >= lastPage - 2) {
      start = Math.max(1, lastPage - (maxVisible - 1));
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section className="list-page">
      <div className="container">
        {/* Search Form */}
        <SearchBar
          BASE_URL={BASE_URL}
          initialQuery={query}
          onResults={(newQuery) => {
            setCurrentPage(1);
            setQuery(newQuery); // triggers useEffect -> fetchData
          }}
          variant="list"
        />

        {/* Results */}
        <div className="row mt-4">
          {loading ? (
            <div className="col-12 text-center">Loading...</div>
          ) : results.length > 0 ? (
            results.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <ListCard data={item} />
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center">No results found</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {lastPage > 1 && (
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              {/* Previous Button */}
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => fetchData(currentPage - 1)}
                >
                  Previous
                </button>
              </li>

              {/* First Page */}
              {getPageNumbers()[0] > 1 && (
                <>
                  <li className="page-item">
                    <button className="page-link" onClick={() => fetchData(1)}>
                      1
                    </button>
                  </li>
                  {getPageNumbers()[0] > 2 && (
                    <li className="page-item disabled">
                      <span className="page-link">...</span>
                    </li>
                  )}
                </>
              )}

              {/* Dynamic Pages */}
              {getPageNumbers().map((num) => (
                <li
                  key={num}
                  className={`page-item ${currentPage === num ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => fetchData(num)}>
                    {num}
                  </button>
                </li>
              ))}

              {/* Last Page */}
              {getPageNumbers().slice(-1)[0] < lastPage && (
                <>
                  {getPageNumbers().slice(-1)[0] < lastPage - 1 && (
                    <li className="page-item disabled">
                      <span className="page-link">...</span>
                    </li>
                  )}
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => fetchData(lastPage)}
                    >
                      {lastPage}
                    </button>
                  </li>
                </>
              )}

              {/* Next Button */}
              <li
                className={`page-item ${currentPage === lastPage ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => fetchData(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}

export default List;
