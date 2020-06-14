import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/services';
import Navbar from '../../components/Navbar';
import StatementCard from '../../components/StatementCard';

const Statement = () => {
  const [transactions, setTransactions] = useState([]);
  // const [selected, setSelected] = useState('');

  useEffect(() => {
    getUser()
      .then(response => {
        const { transactions } = response.data;

        const sorted = transactions.sort((a, b) => {
          const first = new Date(a.date).getTime();
          const second = new Date(b.date).getTime();

          return second - first;
        });

        setTransactions(sorted);
      })
      .catch(console.error);
  }, []);

  const handleSelected = event => {
    const { value } = event.target;
    const copyTransactions = [...transactions];

    switch (value) {
      case 'newest':
        copyTransactions.sort((a, b) => {
          const first = new Date(a.date).getTime();
          const second = new Date(b.date).getTime();

          return second - first;
        });

        setTransactions(copyTransactions);
        break;
      case 'oldest':
        copyTransactions.sort((a, b) => {
          const first = new Date(a.date).getTime();
          const second = new Date(b.date).getTime();

          return first - second;
        });
        setTransactions(copyTransactions);
        break;
      case 'higher':
        copyTransactions.sort((a, b) => b.price - a.price);
        setTransactions(copyTransactions);
        break;
      case 'lowest':
        copyTransactions.sort((a, b) => a.price - b.price);
        setTransactions(copyTransactions);
        break;
      default:
        break;
    }
  };

  if (!transactions.length) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Navbar />
      <header className="container transactions-header">
        <h1 className="title title--green">Estrato</h1>
        <select
          className="select"
          name="transactions"
          id="transactions"
          onChange={handleSelected}
        >
          <option value="newest">Mais recente</option>
          <option value="oldest">Mais antigo</option>
          <option value="higher">Maior valor</option>
          <option value="lowest">Menor valor</option>
        </select>
      </header>

      <div className="container">
        <ul className="transactions">
          {transactions.map(transaction => (
            <StatementCard key={transaction.id} {...transaction} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Statement;
