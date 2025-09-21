import React from "react";
import { useParams } from "react-router-dom";
import MenuDisplay from "./MenuDisplay";
import NavData from "../constants/NavMenu.js";
import { Link } from "react-router-dom";

function MenuContainer() {
  // Get category from URL parameters
  const { category } = useParams();

  return (
    <div>
      {/* Display menu items only if a category is selected in the URL */}
      {category && NavData[category] ? (
        <div className="container mx-auto px-4 py-8">
          <MenuDisplay 
            category={category} 
            items={NavData[category]} 
          />
        </div>
      ) : (
        // Show all categories if no specific category is selected
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(NavData).map((cat) => (
              <div key={cat} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{cat}</h3>
                <p className="text-gray-600 mb-4">Explore our delicious {cat.toLowerCase()} options</p>
                <Link 
                  to={`/menu/${cat}`}
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  View {cat}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuContainer;