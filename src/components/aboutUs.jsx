import { Link } from 'react-router-dom';
import AboutUsImage from '../images/aboutUs.jpg';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <section className="aboutUs">
      <div className="container_aboutUs">
        <div className="aboutUs_content">
          <div className="aboutUs_text">
            <h3>Sobre Nós</h3>
            <h2>Nossa Missão</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum eligendi provident ullam repellat similique.</p>
            <Link to="/about" className="aboutUs_btn">Saiba Mais</Link>
          </div>
          <div className="aboutUs_image">
            <img src={AboutUsImage} alt="Sobre Nós" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
