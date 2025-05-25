import React from 'react';
import '../Styles/Footer.css';
import Logo from '../Images/Logo.svg';
import FB from '../Images/fb-icon.png';
import X from '../Images/tw-icon.png';
import IG from '../Images/ig-icon.png';
import In from '../Images/li-icon.png';

function Footer() {
  return (
    <footer className='footer-container'>
      <img src={Logo} alt='Little Lemon Logo' />
      <div className='doormat'>
        <h6>Navigation</h6>
        <ul>
          <li><a href='#/Home'>Home</a></li>
          <li><a href='#/About'>About</a></li>
          <li><a href='#/Menu'>Menu</a></li>
          <li><a href='#/Reservations'>Reservations</a></li>
          <li><a href='#/Order-Online'>Order Online</a></li>
          <li><a href='#/Login'>Login</a></li>
        </ul>
      </div>
      <div className='doormat'>
        <h6>Contact</h6>
        <p><b>123 Easy Street</b></p>
        <p><b>Chicago, IL 60652</b></p>
        <p><b>(555) 555-5555</b></p>
        <p><b>contact@littlelemon.com</b></p>
      </div>
      <div className='social'>
        <h6>Social</h6>
        <ul className='social-icons'>
          <li><img src={FB} alt='facebook logo' /></li>
          <li><img src={X} alt='X logo' /></li>
          <li><img src={IG} alt='instagram logo' /></li>
          <li><img src={In} alt='LinkedIn logo' /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
