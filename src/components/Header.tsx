// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-red-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
        </div>
        <nav className="space-x-4">
          <Link to="/admin" className="hover:text-gray-300">Admin Dashboard</Link>
          <Link to="/user" className="hover:text-gray-300">User Management</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
