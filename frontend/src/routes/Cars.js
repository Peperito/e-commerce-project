import SideBar from "../components/SideBar";
import LogoBar from "../components/LogoBar";
import mockData from "../data/mockData";

export const Cars = () => {



    return (
        <main>
            <SideBar />
            <LogoBar />
            <div className="mt-32 ml-32 grid gap-6 lg:grid-cols-3">
            {mockData.map((car) => (
                <div key={car.model} className="flex items-center rounded-lg bg-slate-200 shadow-lg overflow-hidden">
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
            </div>

        </main>
    )
}

export default Cars;