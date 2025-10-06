import React from 'react';

const OrderConfirmationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
            <div className="bg-gray-800 text-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center">
                <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h2 className="text-2xl font-bold font-serif mb-2">Order Confirmed!</h2>
                <p className="text-gray-400 mb-6">Thank you for your purchase. Your delicious meal is on its way!</p>
                <button onClick={onClose} className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors">
                    Close
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmationModal;