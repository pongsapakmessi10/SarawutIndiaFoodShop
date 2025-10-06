import React, { useState } from 'react';

const FoodCard = ({ item, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(item);
    setTimeout(() => {
        setIsAdding(false);
    }, 1000);
  }
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative h-56 overflow-hidden">
        <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Image+Error&font=lora'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <span className="absolute top-3 right-3 bg-gray-900 text-amber-400 font-bold py-1 px-3 rounded-full text-sm">${item.price.toFixed(2)}</span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold font-serif text-white mb-2">{item.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
        <button 
          onClick={handleAddToCart} 
          className={`w-full font-bold py-2 px-4 rounded-lg transition-all duration-300 ${
            isAdding 
              ? 'bg-green-500 text-white' 
              : 'bg-amber-500 text-gray-900 hover:bg-amber-600'
          }`}
        >
          {isAdding ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;