import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo-conta-simples.svg';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="navbar">
      {toggle && <div className="overlay" />}
      <nav className="container navbar__container">
        <Link to="/">
          <figure className="navbar__brand">
            <img src={logo} alt="Conta Simples" />
          </figure>
        </Link>
        <FaBars
          color="#252525"
          size="2.4rem"
          className="navbar__icon"
          onClick={handleToggle}
        />
        <ul className={`navbar__list ${toggle ? 'navbar__list--active' : ''}`}>
          <FaTimes
            color="#252525"
            size="2.4rem"
            className="navbar__icon navbar__icon--close"
            onClick={handleToggle}
          />
          <li className="navbar__item">
            <NavLink activeClassName="navbar__item--active" exact to="/">
              Início
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              activeClassName="navbar__item--active"
              exact
              to="/statement"
            >
              Extrato
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              activeClassName="navbar__item--active"
              exact
              to="/credit-cards"
            >
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
};

export default Navbar;
