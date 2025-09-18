import React, { useEffect, useState } from "react";
import img1 from "../assets/webpage.webp";
import img2 from "../assets/banner2.jpeg";
import img3 from "../assets/banner3.jpeg";
import img4 from "../assets/banner4.jpeg";
import img5 from "../assets/banner5.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const slides = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
  ];

  const [current, setCurrent] = useState(0);

  // start interval
  useEffect(() =>{
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000);

    return () => clearInterval(interval)
  })
  // stop interval




 const next = () => setCurrent((next) => (next + 1) % slides.length)
 const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div
      className="relative h-[410px] overflow-hidden"
      
    >
      {/* Slide (using opacity for crossfade) */}
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={slides[current].img}
          alt={s.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
            ${i === current ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== current}
        />
      ))}

      {/* Prev/Next */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute  left-4 top-1/2"
      >
        <ChevronLeft size={28} className="w-10 h-10 hover:bg-white rounded-full cursor-pointer " />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 top-1/2"
      >
        <ChevronRight size={28} className="w-10 h-10 hover:bg-white rounded-full cursor-pointer " />
      </button>

      {/* live region for screen readers */}
      <div className="sr-only" aria-live="polite">
        {slides[current].alt}
      </div>
    </div>
  );
}

export default Hero;
