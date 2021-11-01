import React from "react";
import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm"
import Footer from "../../components/Footer";

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
          <button className="btnNav" onClick={this.props.onChangePage}>
            Início
          </button>
        </Header>

        <RegisterForm />


        <Footer />
      </div>
    );
  }
}

export default RegisterPage;
