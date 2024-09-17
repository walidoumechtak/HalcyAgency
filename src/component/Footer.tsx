import "./CssModules/Footer.css";
import { FaFacebook, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className="py-36 footer">
            <div className="flex md:px-0 px-6 2xl:justify-between items-center container mx-auto text-white justify-center w-full md:flex-row gap-16 flex-col flex-wrap">
                {/* flex 2xl:justify-between items-center justify-center w-full md:flex-row gap-10 flex-col flex-wrap */}
                <div className="flex w-[300px] gap-4 flex-col items-start">
                    <h1 className="footer-logo">Halcy <span>Agency</span></h1>
                    <p>
                        Conveniently customizec web services Sontinually aggregate frictionle interfa without Globally without Globally. 
                    </p>
                    <div className="flex gap-3  w-full md:justify-start justify-center">
                        <FaFacebook size={40} className="text-white" />
                        <FaTwitter size={40} className="text-blue-400" />
                        <FaInstagram size={40} className="text-red-500" />
                        <FaLinkedin size={40} className="text-white" />
                    </div>
                </div>
                {/* ======================================= */}
                <div className="flex flex-col gap-4">
                    <h1 className="mb-6">Contact Us</h1>
                    <div className="flex gap-4">
                        <FaMapMarkerAlt />
                        <p>Sector # 48,123 Street, Marrakesh, Morocco</p>
                    </div>
                    <div className="flex gap-4">
                        <FaPhone /> {/* Replace this line */}
                        <p>+212685478963</p>
                    </div>
                    <div className="flex gap-4">
                        <FaEnvelope />
                        <p>halcyagency@gmail.com</p>
                    </div>
                </div>
                {/* ======================================= */}
                <div className="flex flex-col justify-between gap-2">
                    <h1 className="mb-8">Quick Link</h1>
                    <a href="#">Home</a>
                    <a href="#">Pages</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact Us</a>
                </div>
                {/* ======================================= */}     
                <div className="flex w-[250px] flex-col gap-5 items-center">
                    <input className="outline-none w-full px-4 py-4 bg-white border-none" type="email"  placeholder="Your Email"/>
                    <button className="w-full block p-4 bg-orange-400 text-white font-semibold">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;