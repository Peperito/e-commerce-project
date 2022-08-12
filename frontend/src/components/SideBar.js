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
    <div className="fixed top-0 left-0 h-screen w-28 bg-slate-800 shadow-lg overflow-y-auto z-10 invisible lg:visible">
        <Link to={value}><SideBarIconProfile icon={ < BsPersonCircle size="44" />} tooltipText="Access your account here" /></Link>
        <SideBarIcon icon={ < FaCarAlt size="44" />} />
        <SideBarIcon icon={ < GiSailboat size="44" />} />
        <SideBarIcon icon={ < FaPlane size="44" />} />
        <div onClick={handleLogout} ><SideBarIconBottom  icon={ < BsBoxArrowRight size="44" />} tooltipText="Exit your account here" /></div>
    </div>
    )
}

const SideBarIcon = ({ icon }) => {

    return (
    <div className = "sidebar-icon group" >
        {icon}
    </div>
)};

const SideBarIconBottom = ({ icon }) => {

    return (
    <div className="sidebar-logout group" >
        {icon}
    </div>
)};

const SideBarIconProfile= ({ icon }) => {

    return (
    <div className="sidebar-profile group" >
        {icon}
    </div>
)};


export default SideBar;