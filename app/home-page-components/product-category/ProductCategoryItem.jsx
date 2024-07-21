import React from 'react';
import Grid from '@mui/joy/Grid';
import Image from 'next/image';
import Image1 from "../../assets/product_category_images/air_conditioner.png";
import Image2 from '../../assets/product_category_images/Electronic-Kitchen-Appliances-PNG.png';
import Image3 from '../../assets/product_category_images/home-appliances.png';
import Image4 from '../../assets/product_category_images/Laptop-Free-Download-PNG.png';
import Image5 from '../../assets/product_category_images/tv.png';
import Image6 from "../../assets/product_category_images/air_conditioner.png";
import Image7 from '../../assets/product_category_images/home-appliances.png';;
import Image8 from '../../assets/product_category_images/tv.png';

const ImageData = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const ProductCategoryItem = () => {
  return (
    <>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ flexGrow: 1 }}
        >
          {ImageData.map((image, index) => (
            <Grid xs={2} sm={4} md={3} key={index}>
              <div className='product-category-tems'>
                <Image
                 src={image}
                 width={250}
                 height={220}
                 alt='Image1'
                />
                <p className='font-item-title'>
                    This is Image 1
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
    </>
  )
}

export default ProductCategoryItem;