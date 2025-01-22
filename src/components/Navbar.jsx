import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">E-cell MNNIT</h1>

      
      <button
        onClick={() => setIsOpen(!isOpen)} 
        className="lg:hidden md:hidden block text-white focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      
      <div className="hidden lg:flex space-x-4 md:flex space-x-4">
        <Link to="/grid" className="hover:underline">Grid</Link>
        <Link to="/" className="hover:underline">Home</Link>
        <a 
          href="https://www.linkedin.com/in/utpal-yadav" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4 space-y-4">
          <Link to="/grid" className="hover:underline block">Grid</Link>
          <Link to="/" className="hover:underline block">Home</Link>
          <a 
            href="https://www.linkedin.com/in/utpal-yadav" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline block"
          >
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
