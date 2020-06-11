import React from 'react';

const AccountCard = ({ title, description, button, test }) => (
  <article data-testid={test}>
    <h2>{title}</h2>
    <p>{description}</p>
    <button type="button">{button}</button>
  </article>
);

export default AccountCard;
