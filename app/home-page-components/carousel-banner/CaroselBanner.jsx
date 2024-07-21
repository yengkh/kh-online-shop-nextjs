"use client";
import React,  { useState } from 'react';
import Image from 'next/image';
import Image1 from '../../assets/product_category_images/air_conditioner.png';
import Image2 from '../../assets/product_category_images/Electronic-Kitchen-Appliances-PNG.png';
import Image3 from '../../assets/product_category_images/home-appliances.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const CaroselBanner = () => {
    const images = [Image1, Image2, Image3];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
      };
  return (
        <div className='carousel'>
            <button 
                onClick={handlePrev} className='arrowButton'
            > {<FontAwesomeIcon icon={faChevronLeft} />} </button>
            <div className='carousel-images-indecator'>
                <div className='imageContainer'>
                    <Image 
                    src={images[currentIndex]} 
                    alt={`slide-${currentIndex}`} 
                    width={800} 
                    height={400} 
                    />
                </div>
                <div className='indicators'>
                    {images.map((_, index) => (
                    <button 
                        key={index} 
                        className= {`${'indicator'} ${currentIndex === index ? 'active' : ''}`} 
                        onClick={() => handleIndicatorClick(index)}
                    />
                    ))}
                </div>
            </div>
            <button 
                onClick={handleNext} 
                className='arrowButton'
            > {<FontAwesomeIcon icon={faChevronRight} />} </button>

            
        </div>
  )
}

export default CaroselBanner