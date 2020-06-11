import React from 'react';

const StatementCard = ({ name, price, date }) => (
  <li>
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
