import React from 'react';
import Moment from 'react-moment';

const StatementCard = ({ id, name, price, date }) => (
  <li data-testid={id}>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      <span>R$ {price}</span>
      <span>
        <Moment format="DD/MM/YYYY">
          {date}
        </Moment>
      </span>
    </div>
  </li>
);

export default StatementCard;
