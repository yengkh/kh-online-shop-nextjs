"use client";

import React from 'react';
import "./style.css";
import TopImage from './home-page-components/hero-pages/TopImage';
import TopCard from './home-page-components/hero-pages/TopCard';
import BannerCard from './home-page-components/hero-pages/BannerCard';
import ProductCategoryItem from './home-page-components/product-category/ProductCategoryItem';
import CaroselBanner from './home-page-components/carousel-banner/CaroselBanner';
import ProductItem from './home-page-components/items/ProductItem';

const page = () => {
  return (
    <div className='main'>
      <div className='home-page-hero'>
        <TopImage />
        <TopCard />
        <BannerCard />
      </div>
      <div className='all-products-category'>
        <ProductCategoryItem />
      </div>
      <CaroselBanner />
      <ProductItem />
      <div className='bottom'></div>
    </div>
  )
}

export default page