import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white mr-8">Intra 75</span>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white">
                Profile
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-white">
                Projects
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Link 
                to="/"
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
              >
                {user?.username?.[0] || 'U'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;