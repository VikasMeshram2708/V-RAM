import React from 'react';
import './Navbar.css';
import { VscThreeBars } from 'react-icons/vsc';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='company-name'>Shopify</div>
        <ul className='links' id='nav__links'>
          <li>Products</li>
          <li>DashBoard</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>About Us</li>
        </ul>
        <button className='join-btn'>Join Us</button>
        <div className='bar-btn'>
          <VscThreeBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
