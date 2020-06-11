import React from 'react';
import contaSimplesLogo from '../../assets/logo-conta-simples-white.svg';
import visaLogo from '../../assets/logo-visa.png';
import masterCardLogo from '../../assets/logo-mastercard.png';

const CreditCard = ({ id, name, valid, number, brand, limit, availableLimit }) => {
  const cardNumber = [...number].reduce((acc, cur, i) => {
    if (i % 4 === 0 && i !== 0) {
      return `${acc} ${cur}`;
    }

    return acc + String(cur);
  }, '');

  return (
    <>
      <div className="credit-card" data-testid={id}>
        <figure className="credit-card__company">
          <img src={contaSimplesLogo} alt="Conta Simples" />
        </figure>
        <div className="credit-card__top">
          <p className="credit-card__top__number">{cardNumber}</p>
        </div>
        <div className="credit-card__bottom">
          <div className="credit-card__bottom__info">
            <p className="credit-card__bottom__valid">{valid}</p>
            <p className="credit-card__bottom__name">{name}</p>
          </div>
          <figure
            className={
              brand === 'visa'
                ? 'credit-card__bottom__brand credit-card__bottom__brand--visa'
                : 'credit-card__bottom__brand'
            }
          >
            <img src={brand === 'visa' ? visaLogo : masterCardLogo} alt={brand} />
          </figure>
        </div>
      </div>

      <div>
        <p>Limite disponível: {availableLimit}</p>
        <p>Limite total: {limit}</p>
      </div>
    </>
  );
};

export default CreditCard;
