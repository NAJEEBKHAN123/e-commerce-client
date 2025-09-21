// components/SearchResults.js
import React from "react";
import { useLocation, Link } from "react-router-dom";
import NavData from "../constants/NavMenu";

function SearchResults() {
  // Get the search query from URL parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  // Combine all menu items from all categories for searching
  const allMenuItems = Object.keys(NavData || {}).flatMap(category => 
    NavData[category].map(item => ({
      ...item,
      category
    }))
  );

  // Filter items based on search query
  const results = query 
    ? allMenuItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        {query ? `Search Results for "${query}"` : "Search Menu Items"}
      </h2>
      
      {query && results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">No results found for "{query}"</p>
          <p className="text-gray-500">Try searching for something else or browse our categories:</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {Object.keys(NavData).map((category) => (
              <Link
                key={category}
                to={`/menu/${category}`}
                className="bg-gray-100 hover:bg-red-100 text-gray-800 hover:text-red-600 px-4 py-2 rounded-full transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      ) : !query ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Enter a search term to find menu items</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item) => (
            <div key={`${item.category}-${item.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <Link 
                  to={`/menu/${item.category}`}
                  className="text-red-600 hover:text-red-800 text-sm mb-2 inline-block"
                >
                  {item.category}
                </Link>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                <p className="text-red-600 font-bold mt-3">${item.price.toFixed(2)}</p>
                <button className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;