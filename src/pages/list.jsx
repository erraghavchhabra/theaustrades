import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListCard from "../components/listCard";

function List() {
  const location = useLocation();
  const [results, setResults] = useState(location.state?.results || []);
  const [loading, setLoading] = useState(!location.state?.results);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    // If results were not passed from <Hero />, fetch default
    if (!location.state?.results) {
      fetch(`${BASE_URL}/building-licenses-search`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data.data)) {
            setResults(data.data);
          } else {
            console.error("Expected `data.data` to be an array:", data);
            setResults([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching licenses:", error);
          setLoading(false);
        });
    }
  }, [BASE_URL, location.state]);

  return (
    <div className="inner-wrap">
      <section className="section-space">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="row row-srch">
                <div className="col-md-5">
                  <h2 className="main-heading">Search List</h2>
                </div>
                <div className="col-md-7">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <span>Search Result By:</span>
                    </li>
                    <li className="list-inline-item">
                      {/* Optional: Show name from first result if available */}
                      {results.length > 0 ? results[0].name : "N/A"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-8">
              {loading ? (
                <p>Loading...</p>
              ) : results.length === 0 ? (
                <p>No results found.</p>
              ) : (
                results.map((item, index) => (
                  <ListCard key={index} data={item} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
