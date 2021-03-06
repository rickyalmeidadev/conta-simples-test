import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login, storeToken } from '../services/services';
import logo from '../assets/logo-conta-simples.svg';

const Login = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    email: '',
    password: '',
  });
  const [userError, setUserError] = useState(false);
  const [reqError, setReqError] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleCpf = (event) => {
    let { value } = event.target;

    if (/[A-Za-z]/.test(value)) return;

    if (value.length >= 11) {
      value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})-/, '$1.$2.$3');
      value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d+)/g, '$1.$2.$3-$4');
    } else if (value.length >= 7) {
      value = value.replace(/(\d{3})\.(\d{3})\./g, '$1.$2');
      value = value.replace(/(\d{3})\.(\d{3})(\d+)/g, '$1.$2.$3');
    } else if (value.length >= 3) {
      value = value.replace(/(\d{3})\./g, '$1');
      value = value.replace(/(\d{3})(\d+)/g, '$1.$2');
    }

    setFormData({ ...formData, cpf: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { cpf, email, password } = formData;

    if (!cpf || !email || !password) {
      setUserError(true);
      return;
    }
    try {
      const response = await login(email, password);
      storeToken(response.data.accessToken);
      history.push('/');
    } catch (error) {
      setReqError(true);
    }
  };

  const { cpf, email, password } = formData;

  return (
    <div className="wrapper wrapper--row login-bg">
      <main className="container container--center">
        <form className="login" onSubmit={handleSubmit}>
          <figure className="login__brand">
            <img src={logo} alt="Conta Simples" />
          </figure>
          <fieldset className="login__box">
            <legend className="login__title">Preencha seus dados</legend>

            <label className="label" htmlFor="cpf">
              CPF
              <input
                className="input"
                type="text"
                id="cpf"
                name="cpf"
                maxLength="14"
                value={cpf}
                onChange={handleCpf}
                data-testid="cpf"
              />
            </label>

            <label className="label" htmlFor="email">
              E-mail
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                data-testid="email"
              />
            </label>

            <label className="label" htmlFor="password">
              Senha
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                data-testid="password"
              />
            </label>

            {userError && (
              <span className="login__error" data-testid="user-error">
                Por favor, insira todos os dados
              </span>
            )}
            {reqError && (
              <span className="login__error" data-testid="req-error">
                Dados inválidos
              </span>
            )}

            <button className="btn" type="submit" data-testid="submit">
              Entrar
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Login;
