import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Login from '../pages/Login';

afterAll(cleanup);

describe('Login in the DOM', () => {
  it('renders', () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has a form for login', () => {
    const { getByTestId } = render(<Login />);

    expect(getByTestId('cpf')).toBeDefined();
    expect(getByTestId('email')).toBeDefined();
    expect(getByTestId('password')).toBeDefined();
    expect(getByTestId('submit')).toBeDefined();
  });
});
