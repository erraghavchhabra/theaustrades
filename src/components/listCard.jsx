import React, { useState, useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import { useNavigate } from "react-router-dom";

function ListCard({ data }) {

  const [bookmarked, setBookmarked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const favRef = useRef(null);
  const tooltipInstance = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
  const userData = localStorage.getItem("user");
   if (data.bookmarks && userData) {
    const user = JSON.parse(userData);
    console.log("user",user.id);
      const found = data.bookmarks.some(
        (bookmark) => parseInt(bookmark.user_id) == parseInt(user.id)
      );

      console.log("found",found);
      setBookmarked(found);
    }

     }, [data.bookmarks]);

  const handleBookmarkToggle = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("https://rehabhospitality.com/api/bookmark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token, // If your backend expects 'token' in header
          // If your backend expects Bearer: Authorization
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          license_id: data.id, // Use correct key if different
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setBookmarked((prev) => !prev);
      } else {
        console.error(result.message || "Bookmark failed.");
      }
    } catch (error) {
      console.error("API error:", error);
    }
  };

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (tooltipInstance.current) {
      tooltipInstance.current.dispose();
    }
    if (favRef.current) {
      tooltipInstance.current = new bootstrap.Tooltip(favRef.current);
    }
  }, [bookmarked]);

  if (!data) return null;

  const listItems = [
    { label: "Licence Number:", value: data.license_number },
    { label: "Expiry Date:", value: data.expiry_date },
    { label: "Licensing Body:", value: data.licensing_body },
    { label: "Category:", value: data.category },
    { label: "Class:", value: data.class },
    { label: "ABN/ACN:", value: data.abn_acn },
    { label: "State:", value: data.state },
    { label: "Address:", value: data.address },
    { label: "Suburb:", value: data.suburb },
    { label: "Zip Code:", value: data.zip_code },
    { label: "Conditions:", value: data.conditions },
  ];

  const visibleItems = expanded ? listItems : listItems.slice(0, 4);

  return (
    <div className="list-card mb-4 p-3 border rounded shadow-sm">
      <div
        className="fav-div float-end"
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

      <h4 className="list-title">{data.name || "Unnamed Business"}</h4>

      <ul className="list-inline tag-ul mb-2">
        <li className="list-inline-item my-auto">
          <span className="occ">
            <i className="fa-solid fa-briefcase"></i> {data.occupation || "N/A"}
          </span>
        </li>
        <li className="list-inline-item my-auto">
          <span
            className={`badge rounded bg-${
              data.status?.toLowerCase() === "expired" ? "danger" : "dark"
            } text-white`}
          >
            {data.status || "Unknown"}
          </span>
        </li>
      </ul>

      <ul className="list-ul list-unstyled">
        {visibleItems.map((item, index) => (
          <li key={index} className="d-flex justify-content-between">
            <span className="fw-bold">{item.label}</span>
            <span>{item.value || "—"}</span>
          </li>
        ))}
      </ul>

      {listItems.length > 4 && (
        <div className="text-center mt-2">
          <button className="btn btn-sm btn-light" onClick={handleToggleExpand}>
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ListCard;
