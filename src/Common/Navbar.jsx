import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

function Navbar() {
  const FoodMenu = [
  "Zinger Burger",
  "Spicy Chicken Wings",
  "Crispy Chicken Broast",
  "Chicken Strips",
  "Peri Peri Fries",
  "Spicy Wraps",
  "Loaded Nachos",
  "Grilled Chicken Sandwich",
  "Fiery Pizza Fries",
  "Hot & Spicy Nuggets",
];


  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center border-b border-gray-300 py-4 bg-white">
      {/* Search input with icon */}
      <div className="flex items-center ml-4 mr-2 relative">
        <Search size={18} className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search Menu"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full"
        />
      </div>

      {/* Scroll buttons container */}
      <div className="flex items-center">
        {/* Prev Button */}
        <button
          onClick={scrollLeft}
          className="bg-white shadow-md rounded-full p-2 mr-2 text-gray-700 hover:text-red-600 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable menu */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 mx-2 hide-scrollbar"
          style={{ maxWidth: 'calc(100vw - 320px)' }}
        >
          {FoodMenu.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={scrollRight}
          className="bg-white shadow-md rounded-full p-2 ml-2 text-gray-700 hover:text-red-600 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Style for hiding scrollbar */}
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