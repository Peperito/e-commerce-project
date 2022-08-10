import React, { useState } from "react";
import { login } from "../api/users";
import SideBar from "./SideBar";
import LogoBar from "./LogoBar";


export const Login = () => {

 const [formState, setFormState] = useState({}); 
	
 const handleChange = ({ target }) => {
	const { name, value } = target;
	setFormState((prev) => ({
		...prev,
		[name]: value
	}));
 };

 
 return (
    <div>
    <LogoBar/>
    <SideBar/>
    <div className="md:flex md:w-screen md:items-center md:justify-center mb-6 mt-36">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" >
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
            </label>
            <input className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formState.username}
                onChange={handleChange}
                name="username"
                type="username"
                placeholder="Username"
            />
            </div>

            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={formState.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="***********"
            />
            </div>

            <div className="flex items-center justify-between">
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button"
            onClick={() => login(formState.username, formState.password)}
            >
             Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-slate-700 hover:text-slate-800" href="/">
             Forgot Password?
            </a>
            </div>
        </form>
    </div>
    </div>
 );
}


export default Login;