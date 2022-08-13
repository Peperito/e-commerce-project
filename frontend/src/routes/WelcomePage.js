import React from "react";
import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";

export const WelcomePage = () => {

    return(
        <main>
            <SideBar />
            <LogoBar />

            <div className="min-w-screen min-h-screen justify-end items-end overflow-auto bg-gradient-to-r from-slate-400 to-slate-100" >
                <div className="grid grid-cols-2 gap-4 justify-items-stretch min-w-screen min-h-screen" >

                    <div className="col-span-2 justify-self-stretch bg-hero-pattern mt-24 pt-40 pb-40">
                        <h2 className="font-oswald font-semibold text-5xl md:text-6xl 2xl:text-7xl text-center text-transparent bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text">
                            Shopifast, loads Fast
                        </h2>
                    </div>


                    <div className="col-span-1 justify-self-end mt-6"><img className="w-32 h-32" src="./chrono.png" alt="chrono" /></div>
                    <div className="col-span-1 justify-self-start mt-6"> <img className="w-64 h-32" src="./veryfast.png" alt="fast"/> </div>


                    <div></div>
                    <div className="col-span-2 justify-self-center ">
                        <h2 className="font-oswald text-xl lg:text-2xl text-center text-orange-200 bg-slate-800 shadow-md rounded-md p-6">
                            Discover our selection of cars, boats and planes!
                        </h2>
                    </div>
                    <div></div>


                </div>
            </div>
        </main>
    )
}

export default WelcomePage;

