import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AccountCard from '../components/AccountCard';

afterEach(cleanup);

describe('<AccountCard />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<AccountCard />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the cards', () => {
    const mockCard = {
      title: 'Conta corrente',
      description: 'Consulte entradas e saídas pelo seu estrato.',
      button: 'Ver estrato',
      test: 'statement',
    };
    const { getByTestId } = render(<AccountCard {...mockCard} />);

    expect(getByTestId('statement')).toBeDefined();
  });
});
