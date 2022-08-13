import React from "react";
import { Link } from "react-router-dom";
import { BsCart, BsMenuDown} from "react-icons/bs";

const LogoBar = () => {

    return ( 
        <div className ="fixed top-0  h-24 w-screen bg-slate-800 text-orange-300 shadow-lg z-20">
            <h1 className="z-40 font-oswald text-center pt-6 text-2xl md:text-4xl drop-shadow-lg"> <Link to="/">Shopifast </Link></h1>
            <CreateOrDisplay />
            <LogoBarIcon icon={ < BsCart size="44" />} />
            <LogoMenuIcon icon={ < BsMenuDown size="44" />} />
        </div>
    )
}

const LogoBarIcon = ({ icon }) => {

    return (
    <div className = "logo-bar-icon" >
        {icon}
    </div>
)};

const LogoMenuIcon = ({ icon }) => {
    return (
        <div className = "logo-menu-icon" >
            {icon}
        </div>)
}

const CreateOrDisplay = () => {

    const user = localStorage.getItem("username")

    if(!user){
        return (
            <Link to="/register"><h2 className="fixed z-30 invisible lg:visible font-oswald md:text-2xl underline hover:text-slate-600 pl-2 left-8 top-8">Create your account</h2></Link>
        )
    }
    else {
        return (
            <h2 className="fixed z-30 invisible lg:visible font-oswald md:text-2xl pl-2 left-8 top-8"> {user} </h2>
        )
    }

}

export default LogoBar;