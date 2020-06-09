import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
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

// describe('Login tests', () => {
//   const { getByTestId } = render(<Login />);

//   describe('Email input', () => {
//     const input = getByTestId('email-input');

//     it('should have an input for email', () => {
//       expect(input).toBeDefined();
//     });

//     it('should have a placeholder', () => {
//       expect(input.placeholder).toBe('Endereço de email');
//     });

//     it('should be possible to change its value', () => {
//       fireEvent.change(input, { target: { value: 'testing' } });
//       expect(input.value).toBe('testing');
//     });
//   });

//   describe('Password input', () => {
//     const input = getByTestId('password-input');

//     it('should have an input for password', () => {
//       expect(input).toBeDefined();
//     });

//     it('should have a placeholder', () => {
//       expect(input.placeholder).toBe('Senha');
//     });

//     it('should be possible to change its value', () => {
//       fireEvent.change(input, { target: { value: 'testing' } });
//       expect(input.value).toBe('testing');
//     });
//   });

//   describe('Login submit', () => {
//     const btn = getByTestId('login-btn');
//     const email = getByTestId('email-input');
//     const password = getByTestId('password-input');

//     it('should have an button for submit login', () => {
//       expect(btn).toBeDefined();
//     });

//     it('should be named "Entrar"', () => {
//       expect(btn.innerHTML).toBe('Entrar');
//     });

//     fireEvent.change(email, { target: { value: '' } });
//     fireEvent.change(password, { target: { value: '' } });
//     fireEvent.click(btn);

//     const errorMsg = getByTestId('error-span');

//     it('should display an error message on login fail', () => {
//       expect(errorMsg).toBeDefined();
//     });
//   });
// });
