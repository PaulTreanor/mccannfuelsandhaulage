import React, { useState, useEffect } from 'react';
import lorry from "../images/lorry.jpg";
import coal from "../images/oilandcoal.jpg";

export default function Carousel() {
  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  // An array of image sources for the carousel
  const images = [coal, lorry, coal, lorry, coal];
  // Length of the images array
  const totalSlides = images.length;

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Function to go to a slide directly
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Use Effect to set up a timer for auto-transition (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item
          >
            <img src={image} className="w-full h-full object-cover" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button type="button" className="absolute top-0 left-0 z-30 p-4 text-white" onClick={prevSlide}>
        &#10094; {/* Left Arrow */}
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 p-4 text-white" onClick={nextSlide}>
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
}
