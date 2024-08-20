"use client";

import React from 'react';

interface ActionBarProps {

}

const ActionBar: React.FC<ActionBarProps> = ({  }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
      <h2 className="text-black text-2xl font-bold">Products</h2>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          disabled={true}
          className={`ml-4 py-2 px-4 rounded ${true ? "bg-gray-500" : "bg-indigo-700 hover:bg-indigo-600"} text-white`}>
          Previous
        </button>
        <button 

          className={`ml-2 py-2 px-4 rounded ${false ? "bg-gray-500" : "bg-indigo-700 hover:bg-indigo-600"} text-white`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ActionBar;