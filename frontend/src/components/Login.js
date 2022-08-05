import React, { useState } from "react";
import { login } from "../api/users";


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
    <div class="md:flex md:w-screen md:items-center md:justify-center mb-6">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formState.username}
                onChange={handleChange}
                name="username"
                type="username"
                placeholder="Username"
            />
            </div>

            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={formState.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="***********"
            />
            </div>

            <div class="flex items-center justify-between">
            <button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button"
            onClick={() => login(formState.username, formState.password)}
            >
             Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-slate-700 hover:text-slate-800" href="#">
             Forgot Password?
            </a>
            </div>
        </form>
    </div>
 );
}


export default Login;