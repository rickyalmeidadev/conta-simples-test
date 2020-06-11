import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import Login from '../pages/Login';

afterEach(cleanup);

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

describe('Login functionalities', () => {
  it('shows error messages for empty fields', async () => {
    const { getByTestId } = render(<Login />);

    fireEvent.click(getByTestId('submit'));

    const error = await waitForElement(() => getByTestId('user-error'));

    expect(error).toBeDefined();
  });
});
