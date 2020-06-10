import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
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

describe('Login functionalities', () => {
  it('shows error messages for empty fields', async () => {
    const { getByTestId } = render(<Login />);

    fireEvent.click(getByTestId('submit'));

    const error = await waitForElement(() => getByTestId('user-error'));

    expect(error).toBeDefined();
  });

  it('shows error messages for wrong data', async () => {
    const { getByTestId } = render(<Login />);

    fireEvent.change(getByTestId('cpf'), { target: { value: '000.000.000.00' } });
    fireEvent.change(getByTestId('email'), {
      target: { value: 'wrong@email.com' },
    });
    fireEvent.change(getByTestId('password'), {
      target: { value: 'wrong-password' },
    });

    fireEvent.click(getByTestId('submit'));

    const error = await waitForElement(() => getByTestId('req-error'));

    expect(error).toBeDefined();
  });
});
