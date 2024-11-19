import React, { useEffect, useState } from "react";
import { CarouselProps } from "../interfaces/InterFaces";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Carausal: React.FC<CarouselProps> = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]);

  return (
    <>
      <div className="relative w-full lg:h-[400px] md:h-[400px] h-[250px] pt-16 px-5">
        <div className="h-full w-full rounded-lg overflow-hidden  flex flex-col justify-center items-center ">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500 "
          />
        </div>
        <button
          className="hidden absolute lg:block md:block lg:top-60 md:top-56 left-0 transform -translate-y-1/2 p-3 bg-white text-black rounded-full shadow-lg focus:outline-none hover:bg-gray-300 transition-colors"
          onClick={prevSlide}
        >
          <FaAngleLeft />
        </button>
        <button
          className="hidden absolute lg:block  md:block lg:top-60 md:top-56 right-0 transform -translate-y-1/2 p-3 bg-white text-black rounded-full shadow-lg focus:outline-none hover:bg-gray-300 transition-colors"
          onClick={nextSlide}
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default Carausal;
