import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t-2 border-amber-500/20 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Sarawut Indian Food</h3>
            <p className="text-sm">Authentic Indian Cuisine, delivered with love.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Spice Street, New Delhi</li>
              <li>contact@royalrasoi.com</li>
              <li>+91 123 456 7890</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sarawut Indian Food. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;