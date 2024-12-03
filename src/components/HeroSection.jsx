import React from 'react';
import hero_img from '../assets/hero_img.png';
import FeaturesSection from './FeaturesSection';

function HeroSection() {
    return (
        <div>
            {/* Hero Section Background */}
            <div
                className="w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${hero_img})`,
                }}
            >
            </div>

            {/* Announcement Bar */}
            <div className="flex justify-center items-center bg-[#009398] h-16 text-xl md:text-4xl font-bold text-white sm:m-0">
                <h1>Сезонная распродажа!</h1>
            </div>

            {/* Hero Section Content */}
            <FeaturesSection />
            <div className='mt-24 mb-24'>
                <div className="flex justify-center items-center bg-[#009398] h-20 text-xl md:text-4xl font-bold text-white sm:m-0 ">
                    <h1>Каркасные бассейны</h1>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
