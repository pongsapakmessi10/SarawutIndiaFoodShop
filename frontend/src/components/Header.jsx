import React, { useState } from 'react';
import { SpiceIcon, ShoppingCartIcon, MenuIcon, XIcon } from './Icons';
import { Link, useNavigate } from 'react-router-dom';
import IndiaImage from './IndiaImage';


const Header = ({ onCartClick, cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  function handleNavigateIndia() {
  navigate("/india");
}

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 text-white shadow-lg shadow-amber-500/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <SpiceIcon className="w-8 h-8 text-amber-500" />
          <Link to={'/'}>
            <h1 className="text-2xl font-bold font-serif tracking-wider">Sarawut Indian Food</h1>
          </Link>
          
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-amber-500 transition-colors duration-300">Home</a>
          <a href="#menu" className="hover:text-amber-500 transition-colors duration-300">Menu</a>
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">About</a>
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={onCartClick} className="relative p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ShoppingCartIcon className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        
          <button className="hidden md:block bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" onClick={handleNavigateIndia}>
            Sign In
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/>}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#home" className="hover:text-amber-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#menu" className="hover:text-amber-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#" className="hover:text-amber-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#" className="hover:text-amber-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
             <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md">
              Sign In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;