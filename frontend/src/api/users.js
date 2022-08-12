import { API_ENDPOINT } from ".";
import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:3001",
  withCredentials: true
});

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

export const register = async(username, password, email) => {

  try {
    const response = await axios.post(
      `${API_ENDPOINT}/register`,
      JSON.stringify({ 
        "username": username,
        "password": password,
        "email": email
      }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        mode: 'cors'
      });
  
      const data = JSON.stringify(response.data);
      
      window.location.replace("https://localhost:3000/login");
      window.alert("Creation Sucessfull");
      return data;
    }
    catch (error) {
      window.alert("Could not create your profile");
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

export const updateUser = async(username, email, firstname, lastname, address, telephone) => {

  const id = localStorage.getItem("userid")

  try {
    const response = await axios.put(
      `${API_ENDPOINT}/users/${id}`,
      JSON.stringify({ 
        "username": username,
        "email": email,
        "first_name": firstname,
        "last_name": lastname,
        "address": address,
        "telephone": telephone
      }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        mode: 'cors'
      });
  
      const data = JSON.stringify(response.data);

      window.alert("Update Sucessfull");
      window.location.replace("https://localhost:3000/profile");
      return data;
    }
    catch (error) {
      window.alert("Could not update your profile");
    }

}