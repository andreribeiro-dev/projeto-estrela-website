import React from 'react';
import HeroImage from '../images/hero.jpg';

import './mainHeader.css'
const MainHeader = () => {
  return (
    <header className="main_header">
      <div className='hero-container'>
        <img src={HeroImage} alt="Hero Image" className='hero-image' />
        <div>
            {/* Conteúdo adicional do hero, como título, texto descritivo, etc. */}
        </div>
      </div>
      </header>
  );
}

export default MainHeader
