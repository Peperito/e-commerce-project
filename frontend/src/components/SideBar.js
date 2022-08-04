import { BsPersonCircle } from "react-icons/bs";
import React from "react";


const SideBar = () => {
    return (
    <div className="fixed top-0 left-0 h-screen w-32 flex flex-col bg-slate-800 text-white shadow-lg">
        <SideBarIcon icon={ < BsPersonCircle size="60" />} tooltipText="Access your account here" />
    </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡', tooltipText = '', invisiLink}) => (
    <div className = "sidebar-icon group">
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
);

export default SideBar;