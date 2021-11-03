// import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { FaSearch } from "react-icons/fa";



const Search = ({ onChange }) => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Pesquisar receita" onChange={onChange} />{" "}
      <FaSearch />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
