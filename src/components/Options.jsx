import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Options = ({ toggleFilterBar, setsearchQuery, searchQuery }) => {
  return (
    <div className="options-container">
      <button onClick={toggleFilterBar} className="filter-button">
        <FontAwesomeIcon icon={faFilter} />
      </button>

      <div className="hotel-name">
        <span className="hotel-title">Dhe Jomels</span>
        <span className="hotel-subtitle">Hotel</span>
      </div>

      <input
        type="text"
        placeholder="Search for a dish..."
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
        className="menu-search"
      />
    </div>
  );
};

export default Options;