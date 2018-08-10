import React from "react";
import './SearchBar.css';

const SearchBar = props => (
    <div className="nav-wrapper search-box">
      <form>
        <div className="input-field grey lighten-1">
          <input id="search" type="search" placeholder="Search for the gist" required />
          <label className="label-icon" for="search"><i className="material-icons search-icon">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
);

export default SearchBar;