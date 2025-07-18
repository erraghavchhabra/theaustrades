import React, { useEffect, useState } from "react";
import ListCard from "../components/listCard";

function List() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/building-licenses`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching licenses:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="inner-wrap">
      <section className="section-space">
        <div className="container">
          <div className="row justify-content-center">
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
                    <li className="list-inline-item">A & M Johnson Construction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
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
