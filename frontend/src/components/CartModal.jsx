import React, { useEffect, useRef } from 'react';
import { XIcon } from './Icons';

const CartModal = ({ cart, isOpen, onClose, onUpdateCart, onCheckout }) => {
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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
            <div ref={modalRef} className="bg-gray-800 text-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                    <h2 className="text-2xl font-bold font-serif">Your Cart</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors"><XIcon className="w-6 h-6"/></button>
                </div>
                <div className="overflow-y-auto p-6 flex-grow">
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-400">Your cart is empty.</p>
                    ) : (
                        <ul className="divide-y divide-gray-700">
                            {cart.map(item => (
                                <li key={item.id} className="flex items-center justify-between py-4">
                                    <div className="flex items-center space-x-4">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/1F2937/FFFFFF?text=Img'; }}/>
                                        <div>
                                            <h3 className="font-bold">{item.name}</h3>
                                            <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center border border-gray-600 rounded">
                                            <button onClick={() => onUpdateCart(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-gray-700">-</button>
                                            <span className="px-3">{item.quantity}</span>
                                            <button onClick={() => onUpdateCart(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-700">+</button>
                                        </div>
                                        <p className="font-bold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => onUpdateCart(item.id, 0)} className="text-red-500 hover:text-red-400 ml-4">
                                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="p-6 border-t border-gray-700 bg-gray-900 rounded-b-lg">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">Subtotal</span>
                            <span className="text-lg font-bold text-amber-400">${total.toFixed(2)}</span>
                        </div>
                        <button onClick={onCheckout} className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;