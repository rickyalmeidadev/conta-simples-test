import React from 'react';
import { Link } from 'react-router-dom';

const AccountCard = ({ title, description, buttonText, link, test }) => (
  <article data-testid={test}>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to={link}>{buttonText}</Link>
  </article>
);

export default AccountCard;
