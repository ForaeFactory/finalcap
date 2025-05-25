import React from 'react';
import Bruchetta from '../Images/bruchetta.svg';

function Header() {
  return (
    <header>
      <meta name="description" content="Little Lemon Chicago"/>
      <meta name="og:title" content="Little Lemon Online Ordering"/>
      <meta name="og:description" content="Little Lemon Chicago, a family-owned restaurant"/>
      <meta name="og:image" content={Bruchetta}/>
    </header>
  )
}

export default Header
