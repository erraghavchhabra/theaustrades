import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListCard from "../../components/listCard";

const SlugPageOccupation = () => {
  const { slug } = useParams();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/building-licenses?occupation=${slug}&page=${page}&limit=${perPage}`
      );

      if (!response.ok) throw new Error("No data found");

      const data = await response.json();

      setResults(data.data || []);
      setTotal(data.total || 0);
      setLastPage(data.last_page || 1);
    } catch (error) {
      console.error("Error fetching licenses:", error);
      setResults([]);
      setTotal(0);
      setLastPage(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [slug, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="inner-wrap">
      <section className="section-space">
        <div className="container">
          {/* Header */}
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
                    <li className="list-inline-item">{slug.replaceAll("-", " ")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {loading ? (
                <p>Loading...</p>
              ) : results.length === 0 ? (
                <p>No results found.</p>
              ) : (
                <>
                  {results.map((item, index) => (
                    <ListCard key={index} data={item} />
                  ))}

                  {/* Pagination Controls */}
                  <div className="pagination mt-4 d-flex justify-content-center flex-wrap">
                    <button
                      className="btn btn-outline-secondary mx-1 mb-2"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>

                    {(() => {
                      const pageButtons = [];
                      const maxVisible = 5;
                      let start = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
                      let end = Math.min(start + maxVisible - 1, lastPage);

                      if (end - start < maxVisible - 1) {
                        start = Math.max(end - maxVisible + 1, 1);
                      }

                      if (start > 1) {
                        pageButtons.push(
                          <button
                            key={1}
                            onClick={() => handlePageChange(1)}
                            className="btn mx-1 mb-2 btn-outline-primary"
                          >
                            1
                          </button>
                        );
                        if (start > 2) {
                          pageButtons.push(<span key="start-ellipsis" className="mx-1 mb-2">...</span>);
                        }
                      }

                      for (let i = start; i <= end; i++) {
                        pageButtons.push(
                          <button
                            key={i}
                            onClick={() => handlePageChange(i)}
                            className={`btn mx-1 mb-2 ${i === currentPage ? "btn-primary" : "btn-outline-primary"}`}
                          >
                            {i}
                          </button>
                        );
                      }

                      if (end < lastPage) {
                        if (end < lastPage - 1) {
                          pageButtons.push(<span key="end-ellipsis" className="mx-1 mb-2">...</span>);
                        }
                        pageButtons.push(
                          <button
                            key={lastPage}
                            onClick={() => handlePageChange(lastPage)}
                            className="btn mx-1 mb-2 btn-outline-primary"
                          >
                            {lastPage}
                          </button>
                        );
                      }

                      return pageButtons;
                    })()}

                    <button
                      className="btn btn-outline-secondary mx-1 mb-2"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === lastPage}
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
};

export default SlugPageOccupation;
