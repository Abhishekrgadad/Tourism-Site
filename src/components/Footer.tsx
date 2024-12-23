import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
<<<<<<< HEAD
            <h3 className="text-xl font-bold mb-4">Wanderlust</h3>
=======
            <h3 className="text-xl font-bold mb-4">TravelTales</h3>
>>>>>>> 737ee91 (updated files)
            <p className="text-gray-400">Discover the world with us. Creating unforgettable travel experiences since 2024.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition">Destinations</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
<<<<<<< HEAD
              <li>123 Travel Street</li>
              <li>Adventure City, AC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@wanderlust.com</li>
=======
              <li>Manglore, Karnataka</li>
              <li>India</li>
              <li>Phone: +91 9876543210</li>
              <li>Email: info@traveltales.com</li>
>>>>>>> 737ee91 (updated files)
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
<<<<<<< HEAD
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
=======
              <a href="https://www.facebook.com/traveltales" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/traveltales" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/traveltales" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/traveltales" className="text-gray-400 hover:text-white transition">
>>>>>>> 737ee91 (updated files)
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
<<<<<<< HEAD
          <p>&copy; 2024 Wanderlust. All rights reserved.</p>
=======
          <p>&copy; 2024 TravelTales. All rights reserved.</p>
>>>>>>> 737ee91 (updated files)
        </div>
      </div>
    </footer>
  );
}