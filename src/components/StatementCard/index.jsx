import React from 'react';

const StatementCard = ({ id, name, price, date }) => (
  <li data-testid={id}>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      <span>R$ {price}</span>
      <span>{date}</span>
    </div>
  </li>
);

export default StatementCard;
