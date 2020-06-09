import jwtDecode from 'jwt-decode';
import api from './api';

const TOKEN_KEY = 'CONTA_SIMPLES_TOKEN';

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? jwtDecode(token) : null;
};

export const login = (email, password) => api.post('login', { email, password });

export const storeToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const logout = async () => localStorage.removeItem(TOKEN_KEY);

export const getUser = () => api.get('users/1');
