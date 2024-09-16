import { MdOutlineDesignServices } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FaDigitalOcean } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import "./CssModules/Features.css";

function Features() {
    return (
        <div className="container mx-auto pt-20 flex flex-col items-center">
            <h3 className="text-xl mb-4 text-orange-400 text-center px-4">Features</h3>
            <h2 className="text-4xl mb-4 px-4 text-center">Our Core Features</h2>
            <p className="text-center px-4">Conveniently customize proactive web services for leveraged interfaces without Globally </p>
            <div className="flex flex-col md:flex-row flex-wrap w-full justify-between items-center py-20">
                <div className="childElement mb-6 flex flex-col  mr-0 items-center justify-center p-10 shadow-md h-[300px] w-[300px]
                    hover:shadow-lg duration-500 hover:-translate-y-2 transition-all">
                    <MdOutlineDesignServices 
                        className="text-pink-500 mb-8 icon-element text-[60px]"
                    />
                    <h2 className="text-xl font-bold mb-4 colorChild transition-all">Design & Layout</h2>
                    <p className="text-center text-gray-500">Continually aggregate friction web interfaces thout globaly interfac without globa. </p>
                </div>
                {/* ------------------------------ */}
                <div className="childElement flex mb-6 flex-col  mr-0 items-center justify-center p-10 shadow-md h-[300px] w-[300px]
                    hover:shadow-lg duration-500  hover:-translate-y-2 transition-all">
                    <IoMusicalNotesOutline 
                        className="text-orange-400 mb-8 icon-element text-[60px]"
                    />
                    <h2 className="text-xl font-bold mb-4 colorChild transition-all">Design & Layout</h2>
                    <p className="text-center text-gray-500">Continually aggregate friction web interfaces thout globaly interfac without globa. </p>
                </div>
                {/* ------------------------------ */}
                <div className="childElement flex mb-6 flex-col  mr-0 items-center justify-center p-10 shadow-md h-[300px] w-[300px]
                    hover:shadow-lg duration-500 hover:-translate-y-2 transition-all">
                    <FaDigitalOcean 
                        className="text-blue-600 mb-8 icon-element text-[60px]"
                    />
                    <h2 className="text-xl font-bold mb-4 colorChild transition-all">Design & Layout</h2>
                    <p className="text-center text-gray-500">Continually aggregate friction web interfaces thout globaly interfac without globa. </p>
                </div>
                {/* ------------------------------ */}
                <div className="childElement mb-6 flex flex-col items-center justify-center p-10 shadow-md h-[300px] w-[300px]
                    hover:shadow-lg duration-500 hover:-translate-y-2 transition-all">
                    <GrDocumentPerformance 
                        className="text-green-500 mb-8 icon-element text-[60px]"
                    />
                    <h2 className="text-xl font-bold mb-4 colorChild transition-all">Design & Layout</h2>
                    <p className="text-center text-gray-500">Continually aggregate friction web interfaces thout globaly interfac without globa. </p>
                </div>
            </div>
        </div>
    )
}

export default Features;