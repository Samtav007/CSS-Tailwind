import React from "react";

const Alert = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
        <button className="font-bold py-2 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 focus:outline-none">
          Button One
        </button>
      </div>
      <div className="bg-red-300 w-9/12 text-red-900 border-red-700 border-2 p-5 rounded-lg mb-4">
        <span className="font-bold text-lg">Alert!</span> This is Awesome!
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center mb-4">
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-10 mr-3" />
        <div>
          <h1 className="text-lg font-bold text-gray-800">Kalvium Store</h1>
          <h2 className="text-gray-600">You have a new course!</h2>
        </div>
      </div>
      <footer className="bg-gray-300 w-full h-10 flex justify-center p-2 mt-6">
      &#169; 2021 Copyright: Kalvium
    </footer>
    </div>
  );
};

export default Alert;
