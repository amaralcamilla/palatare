import logo1 from "../../assets/logo1.png";
import restaurante from "../../assets/restaurante.png";

const Header = ({ children }) => {
  return (
    <header>
      <img className="logo" src={logo1} />
      <img className="restaurant" src={restaurante} />
      <h3>Economize e ganhe em saúde!</h3>

      <nav>{children}</nav>
    </header>
  );
};

export default Header;
