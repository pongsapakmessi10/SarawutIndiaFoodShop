import React from 'react';
import FoodCard from './FoodCard';
import { foodData } from '../data/foodData';

const MenuSection = ({ onAddToCart }) => {
    return (
        <section id="menu" className="py-20" style={{background: 'linear-gradient(to bottom, #111827, #0c101a)'}}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold font-serif text-white">Our Menu</h2>
                    <p className="text-amber-400 mt-3 text-lg">A culinary journey through India</p>
                </div>
                {Object.keys(foodData.menu).map(category => (
                    <div key={category} className="mb-16">
                        <h3 className="text-3xl font-semibold font-serif text-white mb-8 border-l-4 border-amber-500 pl-4 capitalize">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {foodData.menu[category].map(item => (
                                <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuSection;