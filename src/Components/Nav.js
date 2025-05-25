import React from 'react';
import Logo from '../Images/Logo.svg';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className='nav'>
      <Link to='/'>
        <img id="ll-logo" src={Logo} alt="Little Lemon Logo"></img>
      </Link>
      <ul>
        <Link to='/' className='nav-link'>
          <li>Home</li>
        </Link>
        <Link to='/' className='nav-link'>
          <li>About</li>
        </Link>
        <Link className='nav-link'>
          <li>Menu</li>
        </Link>
        <Link to='/booking' className='nav-link'>
          <li>Reservations</li>
        </Link>
        <Link className='nav-link'>
          <li>Order Online</li>
        </Link>
        <Link className='nav-link'>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
