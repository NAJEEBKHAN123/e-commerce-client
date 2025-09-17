import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or any icons

const jollibeeMenu = [
  "Menu",
  "Stores",
  "Jollibee Menu",
  "Family Meals",
  "Super Meals",
  "Jolly Meal Savers",
  "Chickenjoy",
  "Burgers",
  "Jolly Spaghetti & Palabok",
  "Burger Steak",
  "Sandwiches & Savory Pies",
  "Chicken Nuggets",
  "Chicken Fillet",
  "Fries & Sides",
  "Desserts & Sweet Pies",
  "Beverages",
  "Jollibee Kids Values Meal",
  "Meals Under 750 kcal"
];

function MenuList() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center w-full">
      {/* Left button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-white shadow rounded-full p-2"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-4 px-10"
      >
        {jollibeeMenu.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Right button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-white shadow rounded-full p-2"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default MenuList;
