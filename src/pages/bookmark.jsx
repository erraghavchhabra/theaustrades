import React, { useEffect, useState } from "react";
import ListCard from "../components/listCard";

const Bookmarks = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); // or use cookies/context if needed

    fetch("https://rehabhospitality.com/api/get-bookmark", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token ?? "", // send token in header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);

        if (data && Array.isArray(data.data)) {
          setResults(data.data);
        } else {
          setResults([]);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setResults([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
     <div className="inner-wrap">
      <section className="section-space">
       
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Bookmarks</h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((item, index) => (
            <ListCard key={index} data={item} />
          ))}
        </div>
      ) : (
        <p className="text-center">No results found.</p>
      )}
    </div>
     </section>
    </div>
  );
};

export default Bookmarks;
