import React from "react";
import { Link } from "react-router-dom";

function MenuDisplay({ category, items }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">{category} Menu</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              <p className="text-red-600 font-bold mt-3">${item.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuDisplay;