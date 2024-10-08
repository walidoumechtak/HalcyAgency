// import PricingBackground from '../assets/pricingBackground.png';
import "./CssModules/Pricing.css";

function Pricing() {
    return (
        <div id="Pricing" className="w-full pricing">
        <div className="container mx-auto pt-20 flex flex-col items-center">
            <h3 className="text-xl mb-4 text-orange-400 text-center px-4">Pricing</h3>
            <h2 className="text-4xl mb-4 px-4 text-center">Our Best Pricing Plan</h2>
            <p className="text-center px-4"> Conveniently customize proactive web services for leveraged interfaces without Globally </p>

            {/* --------------- ---------------- */}

            {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 w-[80%]  py-20"> */}
            <div className="flex 2xl:justify-between items-center justify-center w-[80%] md:flex-row gap-10 flex-col flex-wrap py-20">
                <div className="flex flex-col items-center bg-white shadow-md sm:w-[350px] mb-6  px-6 py-8 
                    hover:shadow-lg hover:translate-y-2 transition-all duration-500">
                    <div className="priceShape mb-6 flex flex-col items-center justify-center">
                        <h1 className="font-semibold mb-1 text-5xl">Basic</h1>
                        <p className="text-pink-500"><span className="text-4xl font-bold">$29</span>Monthly</p>
                    </div>
                    <div className="text-gray-500">
                        <p className="px-2 py-6 border-b-2">Quisque viverra elit sit amet hendrerit Sed libero vitae metu</p>
                        <p className="px-2 py-6 border-b-2">sit amet hendrerit Sed libero vitae metu</p>
                        <p className="px-2 py-6 border-b-2">Quisque viverra elit sit amet hendrerit Sed libero </p>
                        <p className="px-2 py-6">Quisque viverra elit sit amet vitae metu</p>
                    </div>
                </div>
                {/* -------------------------------------------------- */}
                <div className="flex flex-col items-center bg-white shadow-md sm:w-[350px] mb-6 px-6 py-8 
                    hover:shadow-lg hover:translate-y-2 transition-all duration-500">
                    <div className="priceShape mb-6 flex flex-col items-center justify-center">
                        <h1 className="font-semibold mb-1 text-5xl">Standard</h1>
                        <p className="text-orange-500"><span className="text-4xl font-bold">$49</span>Monthly</p>
                    </div>
                    <div className="text-gray-500">
                        <p className="px-2 py-6 border-b-2">Quisque viverra elit sit amet hendrerit Sed libero vitae metu</p>
                        <p className="px-2 py-6 border-b-2">sit amet hendrerit Sed libero vitae metu</p>
                        <p className="px-2 py-6 border-b-2">Quisque viverra elit sit amet hendrerit Sed libero </p>
                        <p className="px-2 py-6">Quisque viverra elit sit amet vitae metu</p>
                    </div>
                </div>
                {/* -------------------------------------------------- */}
                <div className="flex flex-col items-center bg-white shadow-md sm:w-[350px] mb-6 px-6 py-8
                    hover:shadow-lg hover:translate-y-2 transition-all duration-500">
                    <div className="priceShape mb-6 flex flex-col items-center justify-center">
                        <h1 className="font-semibold mb-1 text-5xl">Premium</h1>
                        <p className="text-green-400"><span className="text-4xl font-bold">$99</span>Monthly</p>
                    </div>
                    <div className="text-gray-400">
                        <p className="px-2 py-6 border-b-2">Quisque viverra elit sit amet hendrerit Sed libero vitae metu</p>
                        <p className="px-2 py-6 border-b-2">sit amet hendrerit Sed libero vitae metu</p>
                        <p className="px-2 py-6 border-b-2">Quisque viverra elit sit amet hendrerit Sed libero </p>
                        <p className="px-2 py-6">Quisque viverra elit sit amet vitae metu</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Pricing;