import { API_ENDPOINT } from ".";
import axios from "axios";

export const getUsers = async (category) => {

    const response = await axios.get(`${API_ENDPOINT}/products/${category}`)

    const products = await response.json();
    return products;
    
  };
  