import React from "react";
import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className="register-title">Fale conosco</h1>

      <img
        className="message-image"
        alt="message"
        src="https://images.pexels.com/photos/4033005/pexels-photo-4033005.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="data-label">
          Nome:
          <input
            className="data-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="data-label">
          E-mail:
          <input
            className="data-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@mail.com"
            pattern=".+@.+\..+"
            required
          />
        </label>
        <label className="data-label">
          Mensagem:
          <textarea
            className="message"
            maxLength="250"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button className="btn-save" onSubmit={handleSubmit}>
          Salvar
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
