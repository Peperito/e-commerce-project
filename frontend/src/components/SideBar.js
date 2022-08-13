import { BsPersonCircle, BsBoxArrowRight } from "react-icons/bs";
import { FaCarAlt, FaPlane } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/users";


const SideBar = () => {

    const [value, setValue] = useState("/login");

    const handleLogout = async () => {
        await logout();
        setValue("/login")
    }
    
    useEffect(() => { 
            const islogged = localStorage.getItem('userid');

            if(islogged){
                setValue("/profile")
            }
            if(!islogged){
                setValue("/login")
            }
    }, [value]);


    return (
    <div className="fixed top-0 left-0 h-screen w-24 bg-slate-800 shadow-lg z-10 invisible lg:visible overflow-auto">
        <Link to={value}><div className="sidebar-icon mb-12"> <SideBarIcon icon={ < BsPersonCircle size="44" />} /> </div> </Link> 
        <Link to="/cars"> <div className="sidebar-icon mb-4"><SideBarIcon icon={ < FaCarAlt size="44" />} /> </div> </Link>
        <div className="sidebar-icon mb-4"><SideBarIcon icon={ < GiSailboat size="44" />} /></div>
        <div className="sidebar-icon mb-4"><SideBarIcon icon={ < FaPlane size="44" />} /></div>
        <div className="sidebar-icon mt-12" onClick={handleLogout}> <SideBarIcon className="mt-12" icon={ < BsBoxArrowRight size="44" />} /> </div>
    </div>
    )
}

const SideBarIcon = ({ icon }) => {

    return (
    <div>
        {icon}
    </div>
)};

export default SideBar;