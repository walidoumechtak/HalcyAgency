import NavBar from "../component/NavBar";
import '../component/CssModules/Contact.css'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Footer from "../component/Footer";

function Contact() {
    return (
        <>
            <NavBar />
            {/* <div className="contact"> */}
            <div className="contact flex  h-full md:min-h-[100vh] justify-center mb-14">
                <div className="w-full flex md:flex-row py-20 h-full md:h-[100vh] flex-col justify-between gap-10 container mx-auto">
                    <div className="flex gap-4 flex-col  md:h-[500px] h-auto justify-between md:w-1/2 w-full">
                        <div className=" flex items-center gap-8 bg-white px-4 py-6">
                            <FaMapMarkerAlt size={40} className="text-red-400" />
                            <p>
                                Sector ALT3, 123 Street, Marrakesh, Morocco
                            </p>
                        </div>
                        <div className=" flex items-center gap-8 bg-white px-4 py-6">
                            <FaPhone size={40} className="text-orange-400" />
                            <p>
                                +212645789632 <br /> 012-859-6510003
                            </p>
                        </div>
                        <div className=" flex items-center gap-8 bg-white px-4 py-6">
                            <FaEnvelope size={40} className="text-green-400" />
                            <p>
                                walid1234@gmail.com <br />
                                emialtoemail@gmail.com
                            </p>
                        </div>
                        <div className=" flex items-center gap-8 bg-white px-4 py-6">
                            <FaGlobe size={40} className="text-green-400" />
                            <p>
                                <a href="https://www.walidoumechtak.github.io/portfolio">Check our Portfolio</a> <br />
                            </p>
                        </div>
                        {/* FaGlobe */}
                    </div>
                    <div className="md:w-1/2 w-full md:h-[500px] h-auto">
                        <form className="flex flex-col h-full justify-between gap-4" action="">
                            <div className="flex md:flex-row flex-col gap-4">
                                <input type="text" placeholder="Your Name" className="w-full p-4 outline-none" />
                                <input type="email" placeholder="Your Email" className="w-full p-4 outline-none" />
                            </div>
                            <div>
                                <input type="text" placeholder="Subject" className="w-full p-4 outline-none" />
                            </div>
                            <div>
                                <textarea name="" id="" cols={30} rows={10} placeholder="Message" className="w-full p-4 outline-none"></textarea>
                            </div>
                            <div>
                                <button className="w-full p-4 bg-blue-400 text-white font-semibold">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />  
            {/* </div> */}
        </>
    )
}
export default Contact;