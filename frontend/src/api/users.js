import { API_ENDPOINT } from ".";

export const getUsers = async () => {
  const response = await fetch(`${API_ENDPOINT}/users`);
  const users = await response.json();

  return users;
};

export const getUserById = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/users/${id}`);
    const users = await response.json();

    return users;
}

export const login = async (username, password) => {
  const response = await fetch(`${API_ENDPOINT}/login`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const isLogged = await response.json();

  return isLogged;
};