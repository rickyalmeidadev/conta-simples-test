import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Statement from '../pages/Statement';

afterEach(cleanup);

describe('<Statement />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Statement />);
    expect(asFragment()).toMatchSnapshot();
  });
});
