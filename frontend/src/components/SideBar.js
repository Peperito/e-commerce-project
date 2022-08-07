import { BsPersonCircle } from "react-icons/bs";
import { getUserId } from "../api/users";
import React from "react";
import { Link } from "react-router-dom";


const SideBar = () => {

    const loginOrProfile = () => {
        const isLogged = document.cookie
    }

    return (
    <div className="fixed top-0 left-0 h-screen w-32 flex flex-col bg-slate-800 text-white shadow-lg">
        <Link to="/profile"><SideBarIcon icon={ < BsPersonCircle size="60" />} tooltipText="Access your account here" /></Link>
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