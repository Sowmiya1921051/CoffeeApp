import { useState } from 'react';
import Header from '../assets/header.jpg';
import Logo from '../assets/logo.png';

const ComponentWithBackgroundImage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${Header})` }}>
            <nav className='text-white p-4 sm:p-10 absolute w-full'>
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center">
                        <img className='w-12' src={Logo} alt="Logo" />
                    </div>
                    <div className="flex justify-end items-center">
                        <button
                            className="block sm:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? "Close" : "Menu"}
                        </button>
                        <div className={`sm:flex ${menuOpen ? 'block' : 'hidden'}`}>
                            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 mr-4">HOME</a>
                            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 mr-4">MENU</a>
                            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 mr-4">BOOKING</a>
                            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 mr-4">ABOUT</a>
                            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 mr-4">BLOG</a>
                            <a href="#" className="block mt-4 sm:inline-block sm:mt-0">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Centered text */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                    <p className='text-3xl text-orange-500'>Savor Perfection</p>
                    <p className='text-6xl text-yellow-500 mt-6'>Where Flavor Meets <br/> Elegance</p>
                    <p className='text-xl text-yellow-500 mt-6'>Prepare your palate for an unforgettable dining experience</p>
                    <button className="border-orange-400 border  text-black px-4 py-2 mt-4 hover-yellow-500">View More</button>

                </div>
            </div>
        </div>
    );
};

export default ComponentWithBackgroundImage;
