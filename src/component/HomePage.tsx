import './CssModules/HomePage.css';
import heroContainer from '../assets/heroContainer.png';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';

function HomePage() {
    return (
        <div className='homePage w-full'>
            <div className='flex items-center px-6 md:px-0 justify-around h-full container w-full mx-auto'>
                <div className='flex items-start flex-col lg:w-1/3 w-full'>
                    <h1 className='text-white text-6xl mb-8'>Rank Your Local Business with Hancy </h1>
                    <p className='text-white'>Compellingly streamline cooperative strategic theme synergistic process improvements. </p>
                    <button className='mt-8 
                        bg-orange-400 text-white py-3 px-10 rounded-3xl font-bold hover:bg-white
                        transition-all duration-300 hover:text-orange-400 hover:-translate-y-1
                        hover:shadow-[0px_7px_7px_0px_rgba(255,255,255,0.5)]'>
                    Contact Us
                </button>
                </div>
                <div className='relative w-1/3 hidden lg:block'>
                    <img src={heroContainer} alt="heor Container image"/>
                    <img className="animate-hero1 absolute bottom-2 hidden 2xl:block right-40" src={hero1} alt="" />
                    <img className='animate-hero2 absolute bottom-40 hidden 2xl:block left-20' src={hero2} alt="" />
                </div>
            </div>
        </div>        
    )
}

export default HomePage;