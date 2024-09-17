
"use client";

import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { SiWebmoney } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function NavBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
};
    }, []);

    const navigate = useNavigate();

    return (      
        <div className={`w-full p-2 z-50 transition-all duration-700 fixed ${scrolled ? 'bg-[#7324A0]' : 'md:bg-transparent bg-[#7324A0]'}`}>
            <Navbar className="container flex items-center justify-between mx-auto w-full md:bg-transparent bg-[#7324A0] ">
            <Navbar.Brand href="#Home" onClick={() => navigate('/')}>
                <span  className="flex items-center self-center whitespace-nowrap text-3xl pl-3 md:pl-0 text-white"> <SiWebmoney className="text-orange-400 mr-4"/> Halcy <span className="font-bold hidden sm:block ml-2"> Agency </span></span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <button
                    onClick={() => navigate('/contact')}
                    className="bg-orange-400 text-white py-3 px-6 rounded-3xl hidden lg:block font-bold hover:bg-white
                    transition-all duration-300 hover:text-orange-400 hover:-translate-y-1
                    hover:shadow-[0px_7px_7px_0px_rgba(255,255,255,0.5)]">
                        Get In Touch Now
                    </button>
                <Navbar.Toggle className="text-white hover:bg-transparent pr-3 md:pr-0 focus:ring-transparent"/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link  onClick={() => navigate('/')} href="#Home" className="font-bold hover:text-[#7324A0]  md:hover:text-white text-white">
                    Home
                </Navbar.Link>  
                <Navbar.Link className="font-semibold text-white md:hover:text-white hover:text-[#7324A0]" onClick={() => navigate('/')} href="#Features">Features</Navbar.Link>
                <Navbar.Link className="font-semibold text-white hover:text-[#7324A0] md:hover:text-white" onClick={() => navigate('/')} href="#Pricing">Pricing</Navbar.Link>
                <Navbar.Link className="font-semibold text-white hover:text-[#7324A0] md:hover:text-white" onClick={() => navigate('/')} href="#Team">Team</Navbar.Link>
                <Navbar.Link className="font-semibold text-white hover:text-[#7324A0] md:hover:text-white" href="#" onClick={() => navigate('/contact')}>Contact</Navbar.Link>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
