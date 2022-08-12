import { API_ENDPOINT } from ".";
import axios from "axios";

export const getUsers = async () => {
    
    const response = await axios.get(`${API_ENDPOINT}/users`);

    const users = await response.json();
  
    return users;
  };
  