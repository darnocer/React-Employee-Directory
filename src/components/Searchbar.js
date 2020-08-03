import React from "react";
import "./styles/Search.css";

function Searchbar() {
  return (
    <div className="columns mt-3">
      <div className="column">
        <form className="form-inline justify-content-center">
          <input
            className="form-control mr-sm-2 is-expanded"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
