import React from 'react';
import FoodCard from './FoodCard';
import { foodData } from '../data/foodData';

const TopPicksSection = ({ onAddToCart }) => {
  return (
    <section id="top-picks" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-white">Our Top Picks</h2>
          <p className="text-amber-400 mt-2">The dishes our customers love the most!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {foodData.topPicks.slice(0, 8).map(item => (
            <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicksSection;