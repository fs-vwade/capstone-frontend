// src/components/Navbar.jsx
import React, { useState } from 'react';  // Add useState
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Settings, ChevronDown } from 'lucide-react';  // Add ChevronDown
import { useSelector, useDispatch } from 'react-redux';  // Add useDispatch
import { logout } from '../features/auth';  // Add logout action

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white mr-8">Intra 75</span>
            <div className="flex items-center space-x-8">
              <Link to="/profile" className="text-gray-300 hover:text-white">
                Profile
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-white">
                Projects
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            
            {/* Profile dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600">
                  {user?.username?.[0] || 'U'}
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {/* Dropdown menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;