import React from 'react';
import { 
    Card, 
    Typography, 
    CardContent
} from '@mui/joy';
  
import { ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';

const TopCard = () => {
  return (
    <>
        <Card
        className = "home-page-hero-card"
        variant="solid"
        invertedColors
        sx={{
          boxShadow: 'lg',
          width: 500,
          maxWidth: '100%',
          height: 400,
        }}
      >
      <div>
        <Typography level="title-lg">Kh Online Shop</Typography>
      </div>
      <CardContent>
        
        <br />
        <Typography level="h1">
          Find your favorite products here and buy with the convenience, variety, and value.
        </Typography>
        <br />
        <Typography level="body-lg">
          All products in your hand.
        </Typography>
      </CardContent>
      
      <Link href="#" className='cart-button-item'><span>{<ShoppingCartOutlined size={100}/>}</span><spna>Shop Now</spna></Link>
      </Card>
    </>
  )
}

export default TopCard