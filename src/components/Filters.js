import React, { useState } from "react";
import "./Filters.css";

const filterOptions = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

const Filters = () => {
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (filter) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div className="filters-container">
      <div className="filter-item checkbox">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">CUSTOMIZBLE</label>
      </div>

      {filterOptions.map((filter) => (
        <div key={filter} className="filter-item">
          <div
            className="filter-header"
            onClick={() => toggleFilter(filter)}
          >
            <span>{filter}</span>
            <span className="arrow">
              {openFilters[filter] ? "▲" : "▼"}
            </span>
          </div>
          <div
            className={`filter-body ${
              openFilters[filter] ? "open" : ""
            }`}
          >
            <p>All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
