import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/services';
import StatementCard from '../../components/StatementCard';

const Statement = () => {
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
      <h1>Estrato</h1>

      <ul>
        {user.transactions.map(transaction => (
          <StatementCard {...transaction} />
        ))}
      </ul>
    </>
  );
};

export default Statement;
