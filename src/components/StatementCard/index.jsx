import React from 'react';
import Moment from 'react-moment';

const StatementCard = ({ id, name, price, date, debit }) => (
  <li className="transactions__item" data-testid={id}>
    <div>
      <h2 className="transactions__title">{name}</h2>
    </div>
    <div className="transactions__info">
      <span
        className={`transactions__value ${debit ? 'transactions__value--debit' : ''}`}
      >
        R$ {price.toFixed(2)}
      </span>
      <span className="transactions__date">
        <Moment format="DD/MM/YYYY">
          {date}
        </Moment>
      </span>
    </div>
  </li>
);

export default StatementCard;
