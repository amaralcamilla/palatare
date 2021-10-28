import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { FaSearch } from "react-icons/fa";

class Search extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <input
          type="text"
          placeholder="Pesquisar receita"
          onChange={this.handleChange}
        />{" "}
        <FaSearch />
      </div>
    );
  }
}

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Search;
