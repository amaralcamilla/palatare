import logo2 from "../../assets/logo2.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <img className="logo2" src={logo2} />
      <ul className="footerList">
        <li className="footerItem">
          <MdLocationOn className="icon" />
          <p className="contact">
            Av. Brasil, 789 <br />
            Baln. Camboriú | SC
          </p>
        </li>

        <li className="footerItem">
          <MdMail className="icon" />
          <p className="contact"> palatare@palatare.com</p>
        </li>

        <li className="footerItem">
          <BsFillTelephoneFill className="icon" />
          <p className="contact"> (47) 9 9877-9877</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
