import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  wait,
} from '@testing-library/react';
import Login from '../pages/Login';

const mockedHistoryPush = jest.fn();

jest.mock('../services/services', () => ({
  login: jest.fn(() => ({ data: { accessToken: 'valid_token' } })),
  storeToken: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
}));

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

  it('should login successfully if valid credentials are provided', async () => {
    const { getByTestId } = render(<Login />);

    const cpfInputElement = getByTestId('cpf');
    const emailInputElement = getByTestId('email');
    const passwordInputElement = getByTestId('password');
    const submitButtonElement = getByTestId('submit');

    fireEvent.change(cpfInputElement, { target: { value: '12345678910' } });
    fireEvent.change(emailInputElement, {
      target: { value: 'valid_email@mail.com' },
    });
    fireEvent.change(passwordInputElement, {
      target: { value: 'valid_password' },
    });

    fireEvent.click(submitButtonElement);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });
});
