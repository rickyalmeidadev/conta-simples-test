import React from 'react';
import { Link } from 'react-router-dom';

const AccountCard = ({ title, description, buttonText, link, test }) => (
  <article className="account-card" data-testid={test}>
    <h2 className="account-card__title">{title}</h2>
    <p className="account-card__description">{description}</p>
    {title === 'Transferêcias' ? (
      <button className="btn btn--card btn--inactive" type="button">Em breve</button>
    ) : (
      <Link className="btn--link" to={link}>
        <button className="btn btn--card" type="button">{buttonText}</button>
      </Link>
    )}
  </article>
);

export default AccountCard;
