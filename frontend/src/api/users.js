import { API_ENDPOINT } from ".";
import { Navigate } from 'react-router-dom';
import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:3001",
  withCredentials: true
});

export const getUsers = async () => {
  const response = await fetch(`${API_ENDPOINT}/users`);
  const users = await response.json();

  return users;
};


export const getUserById = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/users/11`, 
    {
      withCredentials: true,
      mode: 'cors'
    });

    window.alert(response.data);

  } catch (error) {
    console.error(error);
  }
}

export const login = async(username, password) => {

  const response = await axios.post(
    `${API_ENDPOINT}/login`,
    JSON.stringify({ 
      "username": username,
      "password": password
    }),
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      mode: 'cors'
    });

    return window.alert(response.data);
}