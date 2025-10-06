import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TopPicksSection from './components/TopPicksSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import IndiaImage from "./components/IndiaImage";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleAddToCart = (itemToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...itemToAdd, quantity: 1 }];
    });
  };

  const handleUpdateCart = (itemId, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== itemId));
    } else {
      setCart(cart.map(item => item.id === itemId ? {...item, quantity} : item));
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  
  const handleConfirmOrder = () => {
    setIsCheckoutOpen(false);
    setIsConfirmationOpen(true);
    setCart([]);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-gray-900 text-white font-sans selection:bg-amber-500 selection:text-gray-900">
      <Header onCartClick={() => setIsCartOpen(true)} cartItemCount={cartItemCount} />

      {/* ✅ Routes for navigation */}
      <Routes>
        {/* Default page */}
        <Route
          path="/"
          element={
            <>
              <main>
                <HeroSection />
                <TopPicksSection onAddToCart={handleAddToCart} />
                <MenuSection onAddToCart={handleAddToCart} />
              </main>
              <Footer />
            </>
          }
        />
        {/* India Image page */}
        <Route path="/india" element={<IndiaImage />} />
      </Routes>

      {/* Cart and Checkout Modals */}
      <CartModal 
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateCart={handleUpdateCart}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        cart={cart}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onConfirmOrder={handleConfirmOrder}
      />

      <OrderConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
      />
    </div>
  );
}

export default App;
