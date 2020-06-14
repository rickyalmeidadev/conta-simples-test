import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { getUser } from '../services/services';
import Navbar from '../components/Navbar';
import AccountCard from '../components/AccountCard';
import cards from '../utils/cards.json';

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch(console.error);
  }, []);

  if (!user) {
    return (
      <div className="loading">
        <BounceLoader color="#7be115" size="5rem" />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Navbar />
      <header className="container">
        <h2 className="title title--green">Minha conta</h2>
      </header>
      <div className="container">
        <p className="info">
          <span className="info__text">Saldo atual: </span>
          <span className="info__value">R$ {user.balance.toFixed(2)}</span>
        </p>
      </div>

      <section className="container account-grid">
        {cards.map((card) => (
          <AccountCard key={card.test} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Account;
