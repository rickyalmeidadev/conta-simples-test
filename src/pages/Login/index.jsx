import React from 'react';

const Login = () => (
  <form>
    <fieldset>
      <legend>Entrar</legend>

      <label htmlFor="cpf">
        CPF
        <input type="text" id="cpf" name="cpf" data-testid="cpf" />
      </label>

      <label htmlFor="email">
        E-mail
        <input type="email" id="email" name="email" data-testid="email" />
      </label>

      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          name="password"
          data-testid="password"
        />
      </label>

      <button type="submit" data-testid="submit">
        Entrar
      </button>
    </fieldset>
  </form>
);

export default Login;
