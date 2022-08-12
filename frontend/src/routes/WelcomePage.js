import React from "react";
import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";

export const WelcomePage = () => {

    return(
        <main>
            <SideBar />
            <LogoBar />
            <div className="flex min-w-screen h-screen justify-end items-end overflow-auto bg-gradient-to-r from-slate-400 to-slate-100" >
                <div className="grid grid-cols-6 gap-4 justify-items-stretch min-w-screen h-screen" >

                    <div className="col-span-6 justify-self-stretch pt-24 pb-60 bg-hero-pattern">
                        <h2 className="font-oswald font-semibold text-6xl md:text-7xl xl:text-8xl text-center pt-48 text-transparent bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text">
                            Shopifast, loads Fast
                        </h2>
                    </div>


                    <div className="col-span-3 justify-self-end mt-6"><img className="w-32 h-32" src="./chrono.png" alt="chrono" /></div>
                    <div className="col-span-3 justify-self-start mt-6"> <img className="w-64 h-32" src="./veryfast.png" alt="fast"/> </div>


                    <div></div>
                    <div className="col-start-2 col-end-6 justify-self-center">
                        <h2 className="font-oswald text-3xl md:text-4xl text-center text-orange-200 bg-slate-800 shadow-md rounded-md mt-4 mb-2 p-2">
                            Browse our categories from the sidebar and discover our selection of cars, boats and planes!
                        </h2>
                    </div>
                    <div></div>


                </div>
            </div>
        </main>
    )
}

export default WelcomePage;

