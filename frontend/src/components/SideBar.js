import { BsPersonCircle, BsBoxArrowRight } from "react-icons/bs";
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
    <div className="fixed top-0 left-0 h-screen w-32 flex flex-col bg-slate-800 text-white shadow-lg">
        <Link to={value}><SideBarIcon icon={ < BsPersonCircle size="60" />} tooltipText="Access your account here" /></Link>
        <div onClick={handleLogout} ><SideBarIcon icon={ < BsBoxArrowRight size="60" />} tooltipText="Exit your account here" /></div>
    </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡', tooltipText = '', invisiLink}) => {

    return (
    <div className = "sidebar-icon group" >
        {icon}
        <span className="sidebar-invisiLink group-hover:scale-100 peer">
            {invisiLink}
        </span>
        <span className="sidebar-tooltip group-hover:scale-100 peer">
            {text}
        </span>
        <span className="sidebar-tooltipText peer-hover:scale-100 hover:scale-100">
            {tooltipText}
        </span>
    </div>
)};

export default SideBar;