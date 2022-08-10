import React from "react";
import { Link } from "react-router-dom";

const LogoBar = () => {

    return ( 
        <div className ="fixed inline-block top-0  h-24 w-screen bg-slate-800 text-white shadow-lg z-20">
            <h1 className="z-40 font-oswald text-center pt-8 text-4xl drop-shadow-lg"> Shopifast </h1>

            <Link to="/login"><h2 className="fixed z-30 font-oswald text-xl underline hover:text-slate-600 pl-2 top-9">Login</h2></Link>
            <h2 className="fixed z-30 font-oswald text-xl left-14 top-9"> / </h2>
            <Link to="/register"><h2 className="fixed z-30 font-oswald text-xl underline hover:text-slate-600 pl-2 left-16 top-9">Register</h2></Link>
        </div>
    )
}

export default LogoBar;