import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavData from "../constants/NavMenu";

function Navbar() {
  const scrollRef = useRef(null);

  // Define all categories
  const categories = Object.keys(NavData || {});

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center border-b border-gray-300 py-4 bg-white">
      {/* Search input */}
      <div className="flex items-center ml-4 mr-2 relative">
        <Search size={18} className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search Menu"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full"
        />
      </div>

      {/* Category navigation */}
      <div className="flex items-center">
        <button 
          onClick={scrollLeft} 
          className="bg-white shadow-md rounded-full p-2 mr-2 text-gray-700 hover:text-red-600 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <div 
          ref={scrollRef} 
          className="flex overflow-x-auto gap-4 mx-2 hide-scrollbar" 
          style={{ maxWidth: 'calc(100vw - 320px)' }}
        >
          {categories.map((cat) => (
            <NavLink
              key={cat}
              to={`/menu/${cat}`}
              className={({ isActive }) => 
                `flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`
              }
              end 
            >
              {cat}
            </NavLink>
          ))}
        </div>

        <button 
          onClick={scrollRight} 
          className="bg-white shadow-md rounded-full p-2 ml-2 text-gray-700 hover:text-red-600 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <style>
        {`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;