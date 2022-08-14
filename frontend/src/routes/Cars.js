import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";
import React, {useState} from "react";
import mockData from "../data/mockData";

export const Cars = () => {

    const [page, setPage] = useState(1);



    return (
        <main>
            <SideBar />
            <LogoBar />
            <div className="mt-32 ml-32 grid gap-4 lg:grid-cols-3">
            {mockData.map((car) => (
                <div key={car.model} className="flex items-center rounded-lg bg-slate-200 shadow-md overflow-hidden">
                    <img className="h-32 w-32 flex-shrink-0" src={car.imageUrl} alt={car.imageAlt} />
                    <div className="px-6 py-4">
                        <div className="text-lg font-semibold text-slate-900">
                        {car.model}
                        </div>
                        <div>
                        Price in $: {car.price}
                        </div>
                    </div>
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