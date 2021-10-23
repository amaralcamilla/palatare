import React from "react";
import "./style.css";
import logo1 from "../../img/logo1.png";
import { FaSearch } from "react-icons/fa";
import restaurante from "../../img/restaurante.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logo" src={logo1} />
        
        <img className="restaurant" src={restaurante} />
        <h3>Economize e ganhe em saúde!</h3>
        <nav>
          <button className="btnNav">Início</button>
          <button className="btnNav">Receitas</button>

          <div className="searchBar">
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Pesquisar receita"
            />{" "}
            <FaSearch />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
