import React from "react";
import "./style.css";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    {
      /*1. Inicializando/definindo o state*/
    }
    this.state = { name: "", email: "", message: [] };
    {
      /*Para validação: Criar um estado para cada input (colocar em cada input {this.props.campo}. Faz com que possamos assumir o controle do input para poder usá-lo futuramente atrelando à uma API, por ex.*/
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    {
      /*3. Atualizando o state*/
    }
    this.setState({ [name]: value });
    {
      /*Quando temos um objeto e queremos acessar uma chave dinâmica (que não temos ainda o valor), usamos [] com o nome da variável dentro. Este "name" que usamops dentro do handleChange, é um atributo do target, de qualquer propriedade do html. Não tem a ver com o "name" que definimos no input.*/
    }
  };

  //Cria evento quando clicar no botão submit prevenir ação default (que no reload muda de página. Após o submit muda automaticamente para a página inicial.
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
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
          <label className="data-label">
            Nome:{" "}
            <input
              className="data-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            {/*2. Utilizando o state (this.state)*/};
          </label>
          <label className="data-label">
            E-mail:{" "}
            <input
              className="data-input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className="data-label">
            Mensagem:{" "}
            <textarea
              className="message"
              maxLength="250"
              rows="6"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
          </label>
          <input className="btn-submit" type="submit" value="Enviar" />
        </form>
      </>
    );
  }
}

export default RegisterForm;
