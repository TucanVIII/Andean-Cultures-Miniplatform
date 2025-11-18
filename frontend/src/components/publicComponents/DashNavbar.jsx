import { useNavigate, Link } from "react-router-dom";
import DarkModeSwitch from "../../features/DarkModeSwitch";

import "../../styles/dashNavbar.css";

import appLogo from "../../assets/appLogo.png";

const DashNavbar = () => {
  const target_section = "infoSection";

  const navigate = useNavigate();

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
          <a onClick={handleMenuClick}>Soporte</a>
          <DarkModeSwitch />
        </div>

        <Link to="login">
          <div class="button-borders">
            <button class="primary-button">LOGIN</button>
          </div>
        </Link>
      </div>
    </nav>
  );

  return content;
};

export default DashNavbar;
