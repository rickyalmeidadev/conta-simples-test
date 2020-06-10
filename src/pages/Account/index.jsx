import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/services';

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(response => {
      setUser(response.data);
    }).catch(console.error);
  }, []);

  return (
    <>
      <h1>Bem-vindo(a), Nome</h1>

      <section>
        <article data-testid="statement">
          <h2>Estrato</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <button type="button">Ver estrato</button>
        </article>
      </section>
    </>
  );
};

export default Account;
