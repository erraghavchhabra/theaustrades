import React, { useState, useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";

function ListCard() {
  const [bookmarked, setBookmarked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const favRef = useRef(null);
  const tooltipInstance = useRef(null);

  const handleBookmarkToggle = () => {
    setBookmarked((prev) => !prev);
  };

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (tooltipInstance.current) {
      tooltipInstance.current.dispose();
    }
    tooltipInstance.current = new bootstrap.Tooltip(favRef.current);
  }, [bookmarked]);

  const listItems = [
    { label: "Licence Number:", value: "4565" },
    { label: "Expiry Date:", value: "24/07/2027" },
    { label: "Licensing Body:", value: "TAS Architect" },
    { label: "Category:", value: "Low Rise Builder" },
    { label: "Class:", value: "A" },
    { label: "ABN/ACN:", value: "24368" },
    { label: "State:", value: "TAS" },
    { label: "Address:", value: "24 Bright Street" },
    { label: "Suburb:", value: "Ingleburn" },
    { label: "Zip Code:", value: "2565" },
    { label: "Conditions:", value: "Not Applicable to perform this task" },
  ];

  const visibleItems = expanded ? listItems : listItems.slice(0, 4);

  return (
    <div className="list-card">
      <div
        className="fav-div"
        ref={favRef}
        onClick={handleBookmarkToggle}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={bookmarked ? "Remove from favorites" : "Add to favorites"}
        style={{ cursor: "pointer" }}
      >
        {bookmarked ? (
          <i className="bi bi-bookmark-check-fill"></i>
        ) : (
          <i className="bi bi-bookmark"></i>
        )}
      </div>

      <h1 className="list-title">A & M Johnson Construction Company pvt Ltd</h1>

      <ul className="list-inline tag-ul">
        <li className="list-inline-item my-auto">
          <span className="occ">
            <i className="fa-solid fa-briefcase"></i> Construction Company
          </span>
        </li>
        <li className="list-inline-item my-auto">
          <span className="badge rounded bg-dark text-white">Expired</span>
        </li>
      </ul>

      <ul className="list-ul list-unstyled">
        {visibleItems.map((item, index) => (
          <li key={index}>
            <span className="span-left">{item.label}</span>
            <span className="span-right">{item.value}</span>
          </li>
        ))}
      </ul>

      {listItems.length > 2 && (
        <div className="text-center">
          <button
          className="btn-light"
          onClick={handleToggleExpand}
        >
          {expanded ? "View Less" : "View More"}
        </button>
          </div>
      )}
    </div>
  );
}

export default ListCard;
