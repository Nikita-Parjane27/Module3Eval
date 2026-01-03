import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';  

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {isAdmin() ? '👨‍💼 Admin' : '👤 Customer'} Dashboard
            </h1>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
          
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;