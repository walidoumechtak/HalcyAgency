import NavBar from "../component/NavBar";
import '../component/CssModules/Contact.css'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <NavBar />
            <div className="contact flex items-center justify-center">
                <div className="w-full flex justify-between gap-10 container mx-auto">
                    <div className="flex gap-8 flex-col justify-between bg-red-500 w-1/2">
                        <div className=" flex items-center gap-8 bg-white px-4 py-6">
                            <FaMapMarkerAlt size={40} className="text-red-400" />
                            <p>
                                Sector ALT3, 123 Street, Marrakesh, Morocco
                            </p>
                        </div>
                        <div className=" flex items-center gap-8 bg-white px-4 py-6">
                            <FaPhone size={40} className="text-orange-400" />
                            <p>
                                +212645789632 <br /> woumecht@gmail.com
                            </p>
                        </div>
                        <div className=" flex items-center gap-8 bg-white px-4 py-6">
                            <FaEnvelope size={40} className="text-green-400" />
                            <p>
                                Sector ALT3, 123 Street, Marrakesh, Morocco
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <form action="">

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;