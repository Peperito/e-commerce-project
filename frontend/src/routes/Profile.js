import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";
import React, { useState, useEffect } from "react";
import { API_ENDPOINT } from "../api/index";
import axios from "axios";


export default function Profile() {

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");

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
        <div className="text-center font-bold">
            <h2 className="pt-36">Username: {username}</h2>
            <h2 className="pt-12">first name: {firstName}</h2>
            <h2 className="pt-12" >last Name: {lastName}</h2>
            <h2 className="pt-12" >email: {email}</h2>
        </div>
      </div>
    </main>
    );
  }