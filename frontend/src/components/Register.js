import React, { useState } from "react";
import SideBar from "./SideBar";
import LogoBar from "./LogoBar";

export const Register = () => {

    const [formState, setFormState] = useState({}); 
	
    const handleChange = ({ target }) => {
       const { name, value } = target;
       setFormState((prev) => ({
           ...prev,
           [name]: value
       }));
    };

    return(
        <main>
            <SideBar />
            <LogoBar/>
            <form class="">
                
            </form>
        </main>
    )
}

export default Register