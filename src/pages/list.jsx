import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchForm";
import ListCard from "../components/listCard";


function List() {
  const location = useLocation();
  const { results: initialResults = [], query = {} } = location.state || {};
  const [results, setResults] = useState(initialResults);

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  return (
    <section className="list-page">
      <div className="container">
        {/* Search Form with filters working here */}
        <SearchBar
          BASE_URL={BASE_URL}
          initialQuery={query}
          onResults={setResults}
          variant="list" 
        />

        {/* Results */}
        <div className="row mt-4">
          {results.length > 0 ? (
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
      </div>
    </section>
  );
}

export default List;
