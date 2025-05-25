import React from 'react';
import HeroImage from '../Images/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className='hero-container-left'>
          <h1 className="ll-heading">
            Little Lemon
          </h1>
          <h3>
            Chicago
          </h3>
          <p className='hero-description'>
            We are a family-owned Mediterranean restaurant,
            focused on traditionaal recipes served with a modern twist!
          </p>
          <Link to='/booking'>
            <button className='reserve-table'>Reserve a Table</button>
          </Link>
        </div>
        <div className='hero-container-right'>
          <img id="hero-image" src={HeroImage} alt='chef carrying delicious Mediterranean food' width='300px' height='380px' />
        </div>
      </section>
    </>
  )
}

export default Hero
