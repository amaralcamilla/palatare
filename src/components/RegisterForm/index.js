import React from "react";
import "./style.css";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //Cria evento quando clicar no botão submit.
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <h1 className="register-title">Fale conosco!</h1>

        <img
          className="message-image"
          src="https://images.pexels.com/photos/4033005/pexels-photo-4033005.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <form className="register-form" onSubmit={this.handleSubmit}>
          {" "}
          //Prevenir ação default (que no reload muda de página. Após o submit
          muda automaticamente para a página inicial.)
          <label className="data-label">
            Nome completo:{" "}
            <input className="data-input" type="text" name="name" required />
          </label>
          <label className="data-label">
            E-mail:{" "}
            <input className="data-input" type="email" name="email" required />
          </label>
          <label className="data-label">
            Mensagem:{" "}
            <textarea className="message" maxLength="250" rows="6" required />
          </label>
          <input className="btn-submit" type="submit" value="Enviar" />
        </form>
      </>
    );
  }
}

export default RegisterForm;
