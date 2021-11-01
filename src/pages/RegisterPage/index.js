import React from "react";
import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm"
import Footer from "../../components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
  }

  handleLike = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    return (
      <div>
        <Header>
         <Link to="/">
          <button className="btnNav">
            Início
          </button>
         </Link>
         
        </Header>

        <RegisterForm />


        <Footer />
      </div>
    );
  }
}

export default RegisterPage;
