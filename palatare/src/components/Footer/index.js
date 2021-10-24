import React from "react";
import "./style.css";
import logo2 from "../../img/logo2.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img className="logo2" src={logo2} />
        <ul className="footerList">
          <li className="footerItem">
            <MdLocationOn className="icon" />
            <p className="contact">
              {" "}
              Av. Brasil, 789 <br />
              Baln. Camboriú | SC
            </p>
          </li>
          <li className="footerItem">
            <AiOutlineMail className="icon" />
            <p className="contact"> palatare@palatare.com</p>
          </li>
          <li className="footerItem">
            <BsTelephone className="icon" />
            <p className="contact"> (47) 9 9877-9877</p>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
