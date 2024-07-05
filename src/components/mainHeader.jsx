import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../images/hero.jpg'

import './mainHeader.css'
const MainHeader = () => {
  return (
    <header className="main_header">
      <div className='hero_container'>
        <div className='hero_image' style={{backgroundImage:`url($(HeroImage})`}}>
          <div className='hero_text'>
              <h1>Projeto Estrela</h1>
              <p>Um projeto social para crianças e adolescentes de baixa renda que concilia educação e futebol de forma gratuita. </p>
              <button className='hero_btn'>
                <Link to="/about" className='text_hero_btn'>Sobre o projeto</Link>
              </button>
          </div>
        </div>
      </div>
      </header>
  );
}

export default MainHeader
