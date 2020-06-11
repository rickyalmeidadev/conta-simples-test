import React from 'react';
import contaSimplesLogo from '../../assets/logo-conta-simples.svg';

const CreditCard = ({ id, name, valid, number, brand, limit, availableLimit }) => (
  <>
    <div data-testid={id}>
      <img src={contaSimplesLogo} alt="Conta Simples" />
      <div>
        <span>{number}</span>
        <span>{valid}</span>
      </div>
      <div>
        <span>{name}</span>
        <img src={contaSimplesLogo} alt={brand} />
      </div>
    </div>

    <div>
      <p>Limite disponível: {availableLimit}</p>
      <p>Limite total: {limit}</p>
    </div>
  </>
);

export default CreditCard;
