import React from "react";
import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";

export const WelcomePage = () => {

    return(
        <main>
            <SideBar />
            <LogoBar />
            <body className="flex w-screen h-screen bg-slate-300 justify-end items-end overflow-auto" >
                <div className="grid grid-cols-6 gap-4 justify-items-stretch w-screen h-5/6" >
                    <div className="justify-self-end"><img className="h-24 w-20" src="./blaze-corrected.png" /></div>
                    <div className="col-start-2 col-end-6 text-white justify-self-center">
                        <h2 className="font-oswald text-6xl text-center text-slate-900">
                            Welcome to Shopifast, the fastest website to buy fast stuff!
                        </h2>
                    </div>
                    <div className="justify-self-start"><img className="h-24 w-20" src="./blaze-corrected.png" /></div>
                    <div className="col-span-3 justify-self-end"><img className="w-48 h-48" src="./chrono.png"/></div>
                    <div className="col-span-3 justify-self-start"> <img className="w-64 h-48" src="./veryfast.png"/> </div>
                    <div className="justify-self-end align-center"><img className="h-28 w-28" src="./meter.png" /></div>
                    <div className="col-start-2 col-end-6 text-white justify-self-center align-center">
                        <h2 className="font-oswald text-4xl text-center text-slate-900">
                            Browse our categories with the sidebar and discover our selection of cars, boats and planes!
                        </h2>
                    </div>
                    <div className="justify-self-start align-center"><img className="h-28 w-28" src="./meter.png" /></div>
                </div>
            </body>
        </main>
    )
}

export default WelcomePage;

