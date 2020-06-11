import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Account from '../pages/Account';

afterEach(cleanup);

describe('<Account />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Account />);
    expect(asFragment()).toMatchSnapshot();
  });
});
