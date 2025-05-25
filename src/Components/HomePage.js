import React from 'react';
import '../Styles/Homepage.css';
import Testimonials from './Testimonials';
import About from './About';
import Hero from './Hero';
import Specials from './Specials';

function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  )
}

export default HomePage
