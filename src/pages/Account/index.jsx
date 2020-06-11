import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/services';
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
    <>
      <div>
        <h2>Minha conta</h2>
        <span>Saldo atual: {user.balance}</span>
      </div>


      <section>
        {cards.map(card => <AccountCard key={card.test} {...card} />)}
      </section>
    </>
  );
};

export default Account;
