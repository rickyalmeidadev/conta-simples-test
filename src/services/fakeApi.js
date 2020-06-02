import axios from 'axios';
import jwtDecode from 'jwt-decode';

const baseUrl = 'http://localhost:5000';
const TOKEN_KEY = 'CONTA_SIMPLES_TOKEN';

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? jwtDecode(token) : null;
};

export const login = (email, password) => axios.post(`${baseUrl}/login`, { email, password });

export const storeToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const logout = async () => localStorage.removeItem(TOKEN_KEY);

export const getUser = () => axios.get(`${baseUrl}/users/1`);
