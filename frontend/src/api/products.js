import { API_ENDPOINT } from ".";
import axios from "axios";

export const getCars = async (page) => {

    const response = await axios.get(`${API_ENDPOINT}/cars/${page}`)

    const products = await response.json();
    return products;
    
  };
  