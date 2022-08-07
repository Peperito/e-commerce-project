import { API_ENDPOINT } from ".";
import { Navigate } from 'react-router-dom';

export const getUsers = async () => {
  const response = await fetch(`${API_ENDPOINT}/users`);
  const users = await response.json();

  return users;
};


export const getUserById = async () => {

  const id=11
  const response = await fetch(`${API_ENDPOINT}/users/${id}`);

  const user = await response.text();
  return user;
};


export const login = async (username, password) => {

  const response = await fetch(`${API_ENDPOINT}/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
  });

  const isLogged = await response.text();
  
  return window.alert(isLogged);
};