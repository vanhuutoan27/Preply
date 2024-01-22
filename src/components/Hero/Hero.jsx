import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h2 className="hero__title">
            Unlock your potential with the best language tutors.
          </h2>
          <Link to="#!" className="hero__button">
            <span>Get started</span>
            <FaArrowRight className="hero__button--icon" />
          </Link>
        </div>

        <div className="hero__right">
          <img
            src="../assets/images/hero-image.jpg"
            className="hero__image"
            width={446}
          />
          <img
            src="../assets/images/hero-image.jpg"
            className="hero__image"
            width={357}
          />
          <img
            src="../assets/images/hero-image.jpg"
            className="hero__image"
            width={286}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
