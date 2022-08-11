import { API_ENDPOINT } from ".";
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


export const login = async(username, password) => {

  try {
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

    const data = JSON.stringify(response.data);
    const parsedData = JSON.parse(data);

    localStorage.setItem('userid', parsedData.userid);
    localStorage.setItem('username', parsedData.username);
    
    window.location.replace("https://localhost:3000");
    return window.alert("Login Sucessfull");
  }
  catch (error) {
    window.alert("Wrong Password");
  }

}

export const logout = async() => {

   try {
    const response = await axios.delete(`${API_ENDPOINT}/logout`, 
    {
      withCredentials: true,
      mode: 'cors'
    });

    localStorage.clear();
    const data = JSON.stringify(response.data);
    window.location.replace("https://localhost:3000");
    return data;

  } catch (error) {
    window.alert(error);
  }

}