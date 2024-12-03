import React from "react";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-teal-500 p-4 text-white">
            <div className="font-bold text-lg">
                <a href="/">INTEX-MARKET.UZ</a>
            </div>
            <div className="hidden sm:flex">
                <a href="/" className="text-[18px] mx-4 hover:underline">
                    Каркасные бассейны
                </a>
                <a href="/" className="text-[18px] mx-4 hover:underline">
                    Надувные бассейны
                </a>
            </div>
            <div className="flex items-center gap-4">
                <a href="tel:+9999110204" className="text-[18px]">
                    (99) 911 02 04
                </a>
                <div className="flex items-center gap-1 cursor-pointer">
                    <img src={telegram} alt="Telegram" className="w-12 h-12" />
                    <img src={instagram} alt="Instagram" className="w-12 h-12" />
                    <a href="/#" className="bg-white text-teal-500 px-2 py-1 rounded-md text-xs mt-[-8px]">
                        RU
                    </a>
                </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="sm:hidden flex items-center">
                <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
