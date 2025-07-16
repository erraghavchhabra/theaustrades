import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListCard from "../../components/listCard";

const SlugPageOccupation = () => {
  const { slug } = useParams();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://rehabhospitality.com/api/building-licenses?occupation=${slug}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // ✅ Ensure it's an array
        if (Array.isArray(data)) {
          setResults(data);
        } else {
          console.warn("API returned non-array data:", data);
          setResults([]); // fallback to empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching licenses:", error);
        setResults([]); // fallback in case of error
        setLoading(false);
      });
  }, [slug]);

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
                    <li className="list-inline-item">{slug.replaceAll('-', ' ')}</li>
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
};

export default SlugPageOccupation;
