import { Link } from "react-router-dom";

import "../../styles/dashHero.css";

import backgroundImage from "../../assets/CulturaInca.jpg";

const DashHero = () => {
  const content = (
    <div className="hero-container">
      <div className="pfp-img">
        <img src={backgroundImage} alt="Hero image" className="bgImage" />
      </div>
      <div className="text-hero__container">
        <h2 className="sub-title">Aprendizaje personalizado y motivador</h2>
        <p className="hero-description">
          Inspirando una nueva forma de aprender y descubrir la historia
        </p>
        <Link to="login">
          <div className="button-borders">
            <button className="primary-button">LOGIN</button>
          </div>
        </Link>
      </div>
    </div>
  );
  return content;
};

export default DashHero;
