import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";
import React, { useState, useEffect } from "react";
import { API_ENDPOINT } from "../api/index";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { updateUser } from "../api/users";

export default function Profile(){

  const id = localStorage.getItem('userid');

  const fetchUser = async () => {
    const response = await axios.get(`${API_ENDPOINT}/users/${id}`, 
    {
      withCredentials: true,
      mode: 'cors'
    });
    console.log(response);
    return response;
  }

  const {data, status} = useQuery(["user", id], fetchUser);

  const [formState, setFormState] = useState({}); 
    
  const handleChange = ({ target }) => {
   const { name, value } = target;
   setFormState((prev) => ({
     ...prev,
     [name]: value
   }));
  };

  useEffect(() => {
    setFormState({
      username: data?.data.username,
      email: data?.data.email,
      firstname: data?.data.first_name,
      lastname: data?.data.last_name,
      address: data?.data.address,
      telephone: data?.data.telephone
    });
  }, [data?.data.username]);


  if(status === "loading"){

    return (
      <main>
      <SideBar />
      <LogoBar />
      <div>
        <div className="md:flex md:w-screen md:h-screen md:items-center pb-56 md:justify-center bg-gradient-to-r from-slate-400 to-slate-100">
          <form>
            <h2 className="pt-48"> Loading...</h2>
          </form>
        </div>
      </div>
    </main>
    )
  }

    return (
      <main>
      <SideBar />
      <LogoBar/>
      <div className="md:flex md:w-screen md:min-h-screen md:items-center md:justify-center bg-gradient-to-r from-slate-400 to-slate-100">
      <form className="bg-white shadow-md rounded px-8 pt-3 pb-8 mt-24" >
          <div className="mb-4 mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
          </label>
          <input className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formState.username}
              onChange={handleChange}
              name="username"
              type="username"
              defaultValue={data?.data.username}
              disabled = {true}
          />
          </div>

          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          email
          </label>
          <input className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formState.email}
              onChange={handleChange}
              name="email"
              type="email"
              defaultValue={data?.data.email}
          />
          </div>

          <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={formState.firstName}
              onChange={handleChange}
              type="firstname"
              name="firstname"
              defaultValue={data?.data.first_name}
          />
          </div>

          <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={formState.lastName}
              onChange={handleChange}
              type="lastname"
              name="lastname"
              defaultValue={data?.data.last_name}
          />
          </div>

          <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={formState.address}
              onChange={handleChange}
              type="address"
              name="address"
              defaultValue={data?.data.address}
          />
          </div>

          <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
          Telephone
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={formState.telephone}
              onChange={handleChange}
              type="telephone"
              name="telephone"
              defaultValue={data?.data.telephone}
          />
          </div>

          <div className="flex items-center justify-between mb-12">
          <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button"
          onClick={() => updateUser(formState.username, formState.email, formState.firstname, formState.lastname, formState.address, formState.telephone)}
          >
           Update your information
          </button>
          </div>
          <p> Profile Created: {data?.data.created_at.slice(0, -5).replace("T", " ")} </p>
          <p> Profile Last Updated: {data?.data.modified_at.slice(0, -5).replace("T", " ")} </p>
      </form>
      </div>
  </main>
  );
  }