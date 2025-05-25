import React from 'react';
import Restaurant from '../Images/restaurant.jpg';
import Chefs from '../Images/Mario and Adrian A.jpg';

function About() {
  return (
    <>
      <section className='about'>
        <img src={Restaurant} alt='Little Lemon Restaurant' width='250px' height='300px' />
        <div className='about-info'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Nestled in the heart of the community, Little Lemon is a family-owned Mediterranean
            restaurant inspired by generations of homemade recipes and vibrant coastal traditions.
            Whether you’re grabbing a quick lunch or enjoying a relaxed dinner with family,
            Little Lemon brings a taste of the Mediterranean—served with a smile and a touch of home.
            </p>
        </div>
        <img src={Chefs} alt='Little Lemon chefs cooking'  width='250px' height='300px' />
      </section>
    </>
  )
}

export default About
