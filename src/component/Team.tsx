import ceo from "../assets/team/ceo.png"
import marketer from "../assets/team/marketer.png"
import fanti from "../assets/team/fanti.jpg"
import walid from "../assets/team/walid.jpeg"

import { FaLinkedin } from "react-icons/fa";

function Team() {
    return (
        <div className="container mx-auto pt-20 flex flex-col items-center">
            <h3 className="text-xl mb-4 text-orange-400 text-center px-4">Team</h3>
            <h2 className="text-4xl mb-4 px-4 text-center">Our Specialist</h2>
            <p className="text-center px-4"> Conveniently customize proactive web services for leveraged interfaces without Globally  </p>
                
                {/* --------------- ---------------- */}
                <div className="flex items-center justify-center w-full md:flex-row gap-8 flex-col flex-wrap py-20">
                    <div className="flex group flex-col items-center justify-center p-6 shadow-md
                        hover:shadow-lg hover:-translate-y-3 transition-all duration-300">
                        <div className="w-[200px] group-hover:bg-purple-500 transition-all duration-300 h-[200px] rounded-full overflow-hidden mb-6">
                            <img src={ceo} alt="ceo" className="-z-10" />
                        </div>
                        <h2 className="font-bold text-xl">Patric</h2>
                        <p className="text-gray-500 mt-1">CEO</p>
                        <FaLinkedin className="text-[30px] text-blue-600 mt-3"/>
                    </div>

                    {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
                    <div className="flex group flex-col items-center justify-center p-6 shadow-md
                        hover:shadow-lg hover:-translate-y-3 transition-all duration-300">
                        <div className="w-[200px] group-hover:bg-purple-500 transition-all duration-300 h-[200px] rounded-full overflow-hidden mb-6">
                            <img src={walid} alt="Developer" className="-z-10" />
                        </div>
                        <h2 className="font-bold text-xl">Walid Oumechtak</h2>
                        <p className="text-gray-500 mt-1">Developer</p>
                        <FaLinkedin className="text-[30px] text-blue-600 mt-3"/>
                    </div>

                    {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
                    <div className="flex group flex-col items-center justify-center p-6 shadow-md
                        hover:shadow-lg hover:-translate-y-3 transition-all duration-300">
                        <div className="w-[200px] bg-black group-hover:bg-black transition-all duration-300 h-[200px] rounded-full overflow-hidden mb-6">
                            <img src={fanti} alt="developer" className="object-contain" />
                        </div>
                        <h2 className="font-bold text-xl">Fanti</h2>
                        <p className="text-gray-500 mt-1">Developer</p>
                        <FaLinkedin className="text-[30px] text-blue-600 mt-3"/>
                    </div>

                    {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
                    <div className="flex group flex-col items-center justify-center p-6 shadow-md
                        hover:shadow-lg hover:-translate-y-3 transition-all duration-300">
                        <div className="w-[200px] group-hover:bg-purple-500 transition-all duration-300 h-[200px] rounded-full overflow-hidden mb-6">
                            <img src={marketer} alt="ceo" className="-z-10" />
                        </div>
                        <h2 className="font-bold text-xl">Maria</h2>
                        <p className="text-gray-500 mt-1">Marketer</p>
                        <FaLinkedin className="text-[30px] text-blue-600 mt-3"/>
                    </div>
                </div>
        </div>
    );
}

export default Team;