import { useNavigate } from "react-router-dom";

import backgroundImage from "../../assets/CulturaInca.jpg";

const DashHero = () => {

  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate("/login");
  }

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
        <button className="login-button" onClick={handleLoginClick}>
          <span className="text-container">
            <span className="text">Login</span>
          </span>
        </button>
      </div>
    </div>
  );
  return content; 
};

export default DashHero;
