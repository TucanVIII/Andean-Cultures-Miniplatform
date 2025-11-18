import { useNavigate } from 'react-router-dom';
import { BiSolidExit } from "react-icons/bi";
import { FaUser,FaPlayCircle,FaHome } from "react-icons/fa";
import DarkModeSwitch from "../../features/DarkModeSwitch";
import "../../styles/userNav.css"

import appLogo from "../../assets/appLogo.png";

const UserNav = () => {
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
            Inicio <FaHome />
          </a>
          <a href={`#${target_section}`} onClick={handleScroll}>
            Secciones <FaPlayCircle />
          </a>
          <a onClick={handleMenuClick}>
            Perfil <FaUser />
          </a>

          <DarkModeSwitch />

        </div>

        <button onClick={handleLoginClick}>
          <BiSolidExit />;
        </button>
      </div>
    </nav>
  );

  return content;
};

export default UserNav