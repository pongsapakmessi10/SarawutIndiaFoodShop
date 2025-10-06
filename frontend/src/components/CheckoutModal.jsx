import React, { useEffect, useRef } from 'react';
import { XIcon } from './Icons';

const CheckoutModal = ({ isOpen, onClose, cart, onConfirmOrder }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) return null;
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirmOrder();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
            <div ref={modalRef} className="bg-gray-800 text-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                    <h2 className="text-2xl font-bold font-serif">Checkout</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors"><XIcon className="w-6 h-6"/></button>
                </div>
                <div className="overflow-y-auto p-6 flex-grow">
                   <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                           <h3 className="text-xl font-semibold mb-4 text-amber-400">Shipping Details</h3>
                           <div>
                               <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                               <input type="text" id="name" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"/>
                           </div>
                           <div>
                               <label htmlFor="address" className="block text-sm font-medium text-gray-300">Address</label>
                               <input type="text" id="address" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"/>
                           </div>
                           <div>
                               <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                               <input type="tel" id="phone" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"/>
                           </div>
                       </div>
                       
                       <div className="space-y-4 bg-gray-900 p-6 rounded-lg">
                           <h3 className="text-xl font-semibold mb-4 text-amber-400">Order Summary</h3>
                           <ul className="space-y-2 mb-4">
                               {cart.map(item => (
                                   <li key={item.id} className="flex justify-between text-sm">
                                       <span>{item.name} x {item.quantity}</span>
                                       <span>${(item.price * item.quantity).toFixed(2)}</span>
                                   </li>
                               ))}
                           </ul>
                           <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-lg">
                               <span>Total</span>
                               <span>${total.toFixed(2)}</span>
                           </div>
                           <div className="pt-4">
                                <h4 className="font-semibold mb-2">Payment (Simulation)</h4>
                                <div className="bg-gray-700 p-4 rounded-md">
                                    <p className="text-sm text-gray-400">This is a demo. No real payment is required.</p>
                                </div>
                           </div>
                            <button type="submit" className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                                Confirm Order
                            </button>
                       </div>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;