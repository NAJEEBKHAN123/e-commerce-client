import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white  ">
      <div className="font-bold text-2xl">
       <Link to='/'><h1 >𝑭𝒐𝒐𝒅𝒊𝒆𝑩𝒖𝒛𝒛</h1></Link>
      </div>
      <div className="flex gap-8">
        <button className="cursor-pointer text-sm font-semibold">Register / Login</button>
        <button className="bg-white text-red-600 text-sm font-semibold px-4 py-2 rounded-full cursor-pointer">Order Now</button>
      </div>
    </div>
  );
}

export default Topbar;
