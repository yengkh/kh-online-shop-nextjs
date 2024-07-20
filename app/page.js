"use client";

import React from 'react';
import "./style.css";
import TopImage from './home-page-components/hero-pages/TopImage';
import TopCard from './home-page-components/hero-pages/TopCard';
import BannerCard from './home-page-components/hero-pages/BannerCard';
import Grid from '@mui/joy/Grid';
import { styled } from '@mui/joy/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const items = Array.from({ length: 16 }, (_, index) => `Item ${index + 1}`);

const page = () => {
  return (
    <div className='main'>
      <div className='home-page-hero'>
        <TopImage />
        <TopCard />
        <BannerCard />
      </div>
      <div className='all-products-category'>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Item>{item}</Item>
          </Grid>
        ))}
      </Grid>
      </div>
      <div className='bottom'></div>
    </div>
  )
}

export default page