
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-pink-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                LoveCompass
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              India's most trusted matrimonial platform connecting hearts and families since 2020.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-gray-400 hover:text-white">Search Profiles</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-white">Membership Plans</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-white">Success Stories</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white">Help & Support</Link></li>
              <li><Link to="/mobile-app" className="text-gray-400 hover:text-white">Mobile App</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/elite-matrimony" className="text-gray-400 hover:text-white">Elite Matrimony</Link></li>
              <li><Link to="/assisted-service" className="text-gray-400 hover:text-white">Assisted Service</Link></li>
              <li><Link to="/wedding-services" className="text-gray-400 hover:text-white">Wedding Services</Link></li>
              <li><Link to="/astrology" className="text-gray-400 hover:text-white">Astrology</Link></li>
              <li><Link to="/premium-matchmaking" className="text-gray-400 hover:text-white">Premium Matchmaking</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-500" />
                <span className="text-gray-400">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pink-500" />
                <span className="text-gray-400">support@lovecompass.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 LoveCompass. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
