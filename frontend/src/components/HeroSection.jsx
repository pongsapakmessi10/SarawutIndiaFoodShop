import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" className="relative h-[85vh] min-h-[500px] text-white flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            {/* The "loop" attribute ensures the video plays again after it finishes */}
            <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
                <source src="videoplayback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4 text-shadow-lg">
                    A Symphony of Spices,
                </h2>
                <p className="text-lg md:text-2xl mb-8 max-w-2xl text-shadow">
                    Experience authentic Indian cuisine, delivered right to your door.
                </p>
                <a href="#menu" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Explore Menu
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
