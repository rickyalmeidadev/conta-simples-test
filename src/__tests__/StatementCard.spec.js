import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import StatementCard from '../components/StatementCard';

afterEach(cleanup);

describe('<StatementCard />', () => {
  const mockCard = {
    name: 'Facebook Inc.',
    price: 39.8,
    date: '2020-05-20T09:40:31-0300',
    debit: true,
  };

  it('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <StatementCard {...mockCard} />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the cards', () => {
    const { getByText } = render(
      <Router>
        <StatementCard {...mockCard} />
      </Router>,
    );

    expect(getByText(mockCard.name)).toBeDefined();
    expect(getByText(`R$ ${mockCard.price}`)).toBeDefined();
    expect(getByText(mockCard.date)).toBeDefined();
  });
});
