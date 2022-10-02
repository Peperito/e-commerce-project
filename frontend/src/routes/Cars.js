import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";
import React, {useContext, useState} from "react";
import mockData from "../data/mockData";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Cars = () => {

    const [page, setPage] = useState(1);
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart} = useShoppingCart()

    return (
        <main>
            <SideBar />
            <LogoBar />
            <div className="mt-32 ml-32 grid gap-4 lg:grid-cols-3 mr-8">
            {mockData.map((car) => (
                <div key={car.model} className="flex items-center rounded-lg bg-slate-200 shadow-md overflow-hidden">
                    <img className="h-32 w-32 flex-shrink-0" src={car.imageUrl} alt={car.imageAlt} />
                    <div className="px-6 py-4">
                        <div className="text-lg font-semibold text-slate-900">
                        {car.model}
                        </div>
                        <div>
                        Price: { formatCurrency(car.price)}
                        </div>
                    </div>

                    {getItemQuantity(car.id) === 0 ? (<button className="ml-auto mr-4 text-white bg-orange-600 border-slate-800 border-2 p-2 rounded-xl"
                    onClick={() => increaseItemQuantity(car.id) }>
                        Add to cart!
                    </button>) : 
                    
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-center ml-2">
                            <button className="text-white bg-orange-600 p-2 rounded-lg border-slate-800 border-2 ml-2"
                            onClick={() => decreaseItemQuantity(car.id) }> - </button>
                            <p className="mx-2"> <b>{getItemQuantity(car.id)}</b> Item in Cart </p>
                            <button className="text-white bg-orange-600 p-2 rounded-lg border-slate-800 border-2"
                            onClick={() => increaseItemQuantity(car.id) }> + </button>
                        </div>
                        <button className="w-auto text-white bg-red-600 px-2 rounded-lg border-slate-800 border-2 mt-2"
                        onClick={() => removeFromCart(car.id) }>
                            Remove
                        </button>
                    </div>}

                    </div>))}
                <button disabled={page === 1} 
                className="disabled:opacity-50 bg-slate-700 hover:bg-slate-800 text-white font-bold mx-12 mb-2 rounded focus:outline-none focus:shadow-outline"> 
                Previous 
                </button>
                <button 
                className="disabled:opacity-50 bg-slate-700 hover:bg-slate-800 text-white font-bold mx-12 mb-2 rounded focus:outline-none focus:shadow-outline"> 
                Next 
                </button>
            </div>

        </main>
    )
}

export default Cars;