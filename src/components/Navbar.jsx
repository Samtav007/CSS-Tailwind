import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-500 h-30 flex justify-between items-center text-white p-6">
      <div className="flex items-center space-x-8">
        <a href="/" className="text-2xl font-italic bold">
          Kalvium
        </a>
        <button className="p-2 text-white-200">About Us</button>
        <button className="p-2 text-white-200">Contacts</button> 
        <button className="p-2 text-white-200">Courses</button>
      </div>
      <button className="border-2 border-white py-2 px-4 rounded-md">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
