import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";
import React, { useState, useEffect } from "react";
import { API_ENDPOINT } from "../api/index";
import axios from "axios";


export default function Profile() {

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("Please Add here");
  const [lastName, setLastname] = useState("Please Add here");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("Please Add here");
  const [address, setAddress] = useState("Please Add here");

  const [formState, setFormState] = useState({}); 
	
  const handleChange = ({ target }) => {
   const { name, value } = target;
   setFormState((prev) => ({
     ...prev,
     [name]: value
   }));
  };

  useEffect(() => {
    
  const id = localStorage.getItem('userid');

  axios.get(`${API_ENDPOINT}/users/${id}`, 
  {
    withCredentials: true,
    mode: 'cors'
  })
  .then(function (response) {
    // handle success
    const data = JSON.stringify(response.data);
    const parsedData = JSON.parse(data)
    setUsername(parsedData.username);
    setFirstName(parsedData.first_name);
    setLastname(parsedData.last_name);
    setEmail(parsedData.email);
    setTelephone(parsedData.email);
    setAddress(parsedData.email);
  })
  .catch(function (err) {
    // handle error
    window.alert("You do not have access to this account")
  })
  .then(function () {
  });
  }, []);

    return (
    <main>
      <SideBar />
      <LogoBar />
      <div>
        <div className="md:flex md:w-screen md:h-screen md:items-center pb-56 md:justify-center bg-gradient-to-r from-slate-400 to-slate-100">
          <form>
            <h2 className="pt-12">Username: {username}</h2>
            <h2 className="pt-12">first name: {firstName}</h2>
            <h2 className="pt-12" >last Name: {lastName}</h2>
            <h2 className="pt-12" >email: {email}</h2>
            <h2 className="pt-12">telephone: {telephone}</h2>
            <h2 className="pt-12">address: {address}</h2>
          </form>
        </div>
      </div>
    </main>
    );
  }