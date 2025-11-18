import { useNavigate } from "react-router-dom";
import DarkModeSwitch from "../../features/DarkModeSwitch";

import appLogo from "../../assets/appLogo.png";

const DashNavbar = () => {
  const target_section = "infoSection";

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(target_section);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const content = (
    <nav className="navbar-container">
      <a href="#" className="appLogo">
        <img src={appLogo} alt="Logo de YACHAY" className="app-logo-img" />
        <h1 className="title">YACHAY</h1>
      </a>

      <div className="nav-links__container">
        <div className="nav-links">
          <a href={`#${target_section}`} onClick={handleScroll}>
            Saber más
          </a>
          <a onClick={handleMenuClick}>
            Soporte
          </a>
          <DarkModeSwitch />

        </div>

        <button className="login-button" onClick={handleLoginClick}>
          <span className="text-container">
            <span className="text">Login</span>
          </span>
        </button>
      </div>
    </nav>
  );

  return content;
};

export default DashNavbar;
