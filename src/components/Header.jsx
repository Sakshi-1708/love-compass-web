import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, User, Bell, CreditCard, Settings } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              LoveCompass
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-pink-500 transition-colors ${isActive('/') ? 'text-pink-500 font-medium' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-gray-700 hover:text-pink-500 transition-colors ${isActive('/dashboard') ? 'text-pink-500 font-medium' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/matches" 
              className={`text-gray-700 hover:text-pink-500 transition-colors ${isActive('/matches') ? 'text-pink-500 font-medium' : ''}`}
            >
              Matches
            </Link>
            <Link 
              to="/search" 
              className={`text-gray-700 hover:text-pink-500 transition-colors ${isActive('/search') ? 'text-pink-500 font-medium' : ''}`}
            >
              Search
            </Link>
            <Link 
              to="/interests" 
              className={`text-gray-700 hover:text-pink-500 transition-colors ${isActive('/interests') ? 'text-pink-500 font-medium' : ''}`}
            >
              Interests
            </Link>
            <Link 
              to="/shortlist" 
              className={`text-gray-700 hover:text-pink-500 transition-colors ${isActive('/shortlist') ? 'text-pink-500 font-medium' : ''}`}
            >
              Shortlist
            </Link>
            <Link 
              to="/messages" 
              className={`text-gray-700 hover:text-pink-500 transition-colors ${isActive('/messages') ? 'text-pink-500 font-medium' : ''}`}
            >
              Messages
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </Button>
            
            <Link to="/myprofile">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>

            <Link to="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/plans">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                <CreditCard className="w-4 h-4 mr-2" />
                Upgrade
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
