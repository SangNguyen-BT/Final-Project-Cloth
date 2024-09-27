import React from "react";
import "./style.css";

const SearchTab = (props) => {
  const {showSearchTab} = props;
  return (
    <div className="search-tab">
      <form className="d-flex align-items-center gap-3" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
        <button type="button" className="btn-close" aria-label="Close" onClick={showSearchTab}/>
      </form>
    </div>
  );
};

export default SearchTab;
