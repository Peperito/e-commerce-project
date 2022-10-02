import React from "react";
import { Link } from "react-router-dom";
import { BsCart, BsMenuDown} from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";

const LogoBar = () => {

    const { cartQuantity, openCart } = useShoppingCart();

    return ( 
        <div className ="fixed top-0  h-24 w-screen bg-slate-800 text-orange-300 shadow-lg z-20">
            <h1 className="z-40 font-oswald text-center pt-6 text-2xl md:text-4xl drop-shadow-lg"> <Link to="/">Shopifast </Link></h1>
            <CreateOrDisplay />
            <div className="flex flex-col items-end" onClick={openCart}>
                <CartIcon icon={ < BsCart size="44" />} />
                {cartQuantity === 0 ? null : 
                <div className="bg-orange-600 mr-4 z-50 px-2 rounded-full text-white "> {cartQuantity} </div>}
            </div>
            <LogoMenuIcon icon={ < BsMenuDown size="44" />} />
        </div>
    )
}

const LogoMenuIcon = ({ icon }) => {
    return (
        <div className = "logo-menu-icon" >
            {icon}
        </div>)
}

const CartIcon = ({ icon }) => {

    return (
        <div className = "logo-bar-icon">
            {icon}
        </div>
)};

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