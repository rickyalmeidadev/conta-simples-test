import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import AccountCard from '../components/AccountCard';

afterEach(cleanup);

describe('<AccountCard />', () => {
  const mockCard = {
    title: 'Conta corrente',
    description: 'Consulte entradas e saídas pelo seu estrato.',
    buttonText: 'Ver estrato',
    link: '/statement',
    test: 'statement',
  };

  it('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <AccountCard {...mockCard} />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the cards', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <AccountCard {...mockCard} />
      </Router>,
    );

    expect(getByTestId(mockCard.test)).toBeDefined();
    expect(getByText(mockCard.title)).toBeDefined();
    expect(getByText(mockCard.description)).toBeDefined();
    expect(getByText(mockCard.buttonText)).toBeDefined();
  });
});
