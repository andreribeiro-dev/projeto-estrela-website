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

      <div className='hero_container'>
          <div className='hero_text'>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur, odio nobis culpa vero, obcaecati nemo qui ipsam nam repellendus fuga voluptatem ea, dolores voluptatum atque. Adipisci iure dolor vero!</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit magni placeat, perferendis illo, ab laboriosam eaque qui, nobis at sunt corporis. Dolorem dicta, explicabo reiciendis numquam quidem amet possimus omnis. </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi, magnam dolor pariatur laboriosam quae mollitia eligendi veniam, vel ullam sunt illo harum nam nihil et consequatur dolorem quia aperiam.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sequi praesentium doloribus voluptatibus, minus beatae totam eius quisquam quas deserunt error placeat molestiae dolorem, odio quidem reprehenderit ab fugiat necessitatibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi, magnam dolor pariatur laboriosam quae mollitia eligendi veniam, vel ullam sunt illo harum nam nihil et consequatur dolorem quia aperiam.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sequi praesentium doloribus voluptatibus, minus beatae totam eius quisquam quas deserunt error placeat molestiae dolorem, odio quidem reprehenderit ab fugiat necessitatibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi, magnam dolor pariatur laboriosam quae mollitia eligendi veniam, vel ullam sunt illo harum nam nihil et consequatur dolorem quia aperiam.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sequi praesentium doloribus voluptatibus, minus beatae totam eius quisquam quas deserunt error placeat molestiae dolorem, odio quidem reprehenderit ab fugiat necessitatibus.</p>
        </div>
      </div>
      </header>
  );
}

export default MainHeader
