import React from "react";

function MenuSection({ sectionTitle, items }) {
  return (
    <div>
      <h1 className="text-center text-4xl p-20 font-bold">{sectionTitle}</h1>
      <div className="flex bg-gray-100">
        {items.map((item, index) => (
          <div key={index} className="w-full px-2">
            <img
              src={item.img}
              alt={item.title || item.name}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h1 className="text-center font-bold text-gray-500">
              {item.title || item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
