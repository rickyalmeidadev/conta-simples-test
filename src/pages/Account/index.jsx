import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/services';
import Navbar from '../../components/Navbar';
import AccountCard from '../../components/AccountCard';
import cards from '../../utils/cards.json';

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then(response => {
        setUser(response.data);
      })
      .catch(console.error);
  }, []);

  if (!user) {
    return <span>Loading...</span>;
  }

  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <header className="header">
          <h2>Minha conta</h2>
          <span>Saldo atual: {user.balance}</span>
        </header>
      </div>


      <section className="container">
        {cards.map(card => <AccountCard key={card.test} {...card} />)}
      </section>
    </div>
  );
};

export default Account;
