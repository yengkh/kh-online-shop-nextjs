"use client";

import './style.css';
import * as React from 'react';
import Input from '@mui/joy/Input';
import Link from 'next/link';
import { 
  SearchOutlined, 
  CaretDownOutlined ,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const Hello = () => {
  const SIZES = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
  const [size, setSize] = React.useState('Medium');
  return (
    <div className='mian'>
      <div className= 'top-nav' >
        <Link href='/'>Logo</Link>
        <div style={{width: 300}}>
        <Input 
          placeholder= "search product..."
          endDecorator = { <SearchOutlined style = {{cursor: 'pointer'}}  /> }
          fullWidth = 'true'
        />
        </div>
      </div>
      <br />
      <div className='seconde-nav'>
        <div className='first-path'>
          <ul>
            <li className='dropdown'>
              <a className='dropdown-show-items'>Product Categories <span> { <CaretDownOutlined />}</span></a>
              <div className="dropdown-content">
                <a href="#">category item</a>
                <a href="#">category item</a>
                <a href="#">category item</a>
                <a href="#">category item</a>
                <a href="#">category item</a>
              </div>
            </li>
            <li><Link href='new-arrival'>New Arrivals</Link></li>
            <li><Link href='popular-products'>Popular Products</Link></li>
            <li><a href='#'>New Arrivals</a></li>
          </ul>
        </div>
        <div className='seconde-path'>
          <ul>
            <li><a href='#'><span>{<HeartOutlined />}</span> Favotite</a></li>
            <li><a href='#'><span>{<ShoppingCartOutlined />}</span> Cart</a></li>
            <li><a href='#'><span>{<UserOutlined />}</span> Log In</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hello
