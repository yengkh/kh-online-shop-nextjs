"use client";
import React, { useState } from "react";
import Image from "next/image";
import Image1 from "../../assets/carousel-banner/black-friday-sale-banner-free-vector.jpg";
import Image2 from "../../assets/carousel-banner/christmas-sale-banner-promotion-Graphics-5299474-1.jpg";
import Image3 from "../../assets/carousel-banner/img1.jpg";
import Image4 from "../../assets/carousel-banner/img2.webp";
import Image5 from "../../assets/carousel-banner/img3.jpg";
import Image6 from "../../assets/carousel-banner/preview-page0.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CaroselBanner = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel">
      <button onClick={handlePrev} className="arrowButton">
        {" "}
        {<FontAwesomeIcon icon={faChevronLeft} />}{" "}
      </button>
      <div className="carousel-images-indecator">
        <div className="imageContainer">
          <Image
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            width={1000}
            height={400}
          />
        </div>
        <div className="indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`${"indicator"} ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="arrowButton">
        {" "}
        {<FontAwesomeIcon icon={faChevronRight} />}{" "}
      </button>
    </div>
  );
};

export default CaroselBanner;
