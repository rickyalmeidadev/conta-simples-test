import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-conta-simples.svg';

const Navbar = () => (
  <header className="navbar">
    <nav className="container navbar__container">
      <Link to="/">
        <figure className="navbar__brand">
          <img src={logo} alt="Conta Simples" />
        </figure>
      </Link>

      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink activeClassName="navbar__item--active" exact to="/">
            Início
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink activeClassName="navbar__item--active" exact to="/statement">
            Extrato
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink activeClassName="navbar__item--active" exact to="/credit-cards">
            Cartões
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink activeClassName="navbar__item--active" exact to="/tranfer">
            Transferências
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
