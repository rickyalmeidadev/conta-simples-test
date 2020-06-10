import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Account from '../pages/Account';

afterEach(cleanup);

const user = { name: 'Fernando' };

describe('<Account />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Account />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows an welcoming message with the user name', async () => {
    const mock = jest.fn(() => Promise.resolve(user));
    const { getByText } = render(<Account />);

    const response = await mock();

    expect(getByText(/bem-vindo/i)).toContains(`${response.name}`);
  });
});
