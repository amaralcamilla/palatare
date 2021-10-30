import React from "react";
import "./style.css";
import logo1 from "../../img/logo1.png";
import Search from "../Search";
import restaurante from "../../img/restaurante.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logo" src={logo1} />
        <img className="restaurant" src={restaurante} />
        <h3>Economize e ganhe em saúde!</h3>

        <nav>
          {this.props.children}
          <Search />
        </nav>
      </header>
    );
  }
}

export default Header;

//{this.props.showButton ? <button>Botão</button>}
//PropType ---> dá pra dizer que a tabela é um array de objetos
