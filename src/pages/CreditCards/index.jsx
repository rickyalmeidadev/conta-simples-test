import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/services';
import Navbar from '../../components/Navbar';
import CreditCard from '../../components/CreditCard';

const CreditCards = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch(console.error);
  }, []);

  if (!user) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="title title--green">Meus cartões</h1>
      </div>

      <div className="container">
        <section className="my-credit-cards">
          {user.creditCards.map((creditCard) => (
            <CreditCard key={creditCard.id} {...creditCard} />
          ))}
        </section>
      </div>
    </>
  );
};

export default CreditCards;
