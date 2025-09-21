import React from "react";
import img from "../assets/about.webp";

function About() {
  return (
    <div className="flex w-full gap-12 px-4 py-10 mt-20">
      {/* left side  */}
      <div className="">
        <img src={img} alt="" className="rounded-lg h-[400px] w-[700px] object-cover"/>
      </div>
      <div className=" w-2/2  text-lg">
        <h1 className="text-3xl font-semibold py-4">𝑭𝒐𝒐𝒅𝒊𝒆𝑩𝒖𝒛𝒛 | Fast Food Near You in Pakistan</h1>
        <p className="py-4 ">
          Welcome to FoodieBuzz, Pakistan’s favorite spot for mouth-watering
          fast food made with love and local flavor.
        </p>
        <p >
          Our menu is packed with your favorite desi-style fast food, including
          Zinger Burgers, Spicy Chicken Wings, Crispy Broast, Peri Peri Fries,
          and Loaded Nachos with a Pakistani twist. From juicy grilled chicken
          sandwiches to fiery pizza fries, every bite is full of flavor and made
          to satisfy your cravings.
        </p>
        <p className="py-4">
          Whether you’re chilling with friends, enjoying a family meal, or
          grabbing a quick solo bite, FoodieBuzz is here for you. Dine-in, take
          away, or order online for fast delivery — wherever you are, we promise
          fresh, tasty meals with the real buzz of Pakistan’s fast food culture.
        </p>
      </div>
    </div>
  );
}

export default About;
