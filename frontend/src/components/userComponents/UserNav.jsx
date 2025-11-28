import { Link } from "react-router-dom";
import { BiSolidExit } from "react-icons/bi";
import { FaUser, FaPlayCircle, FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import DarkModeSwitch from "../../features/DarkModeSwitch";
import "../../styles/userNav.css";

import appLogo from "../../assets/appLogo.png";

const UserNav = () => {
  const content = (
    <nav className="navbar-container">
      <div className="app-logo__container">
        <Link to="/menu" className="appLogo">
          <img src={appLogo} alt="Logo de YACHAY" className="app-logo-img" />
          <h1 className="title">YACHAY</h1>
        </Link>
        <h2>Usuario: USER</h2>
      </div>

      <div className="nav-links__container">
        <div className="nav-links">
          <Link to="/menu">
            Inicio <FaHome />
          </Link>

          <Link to="sections">
            Secciones <FaPlayCircle />
          </Link>

          <Link to="profile">
            Perfil <FaUser />
          </Link>

          <Link to="administrator">
            Administrador <RiAdminFill />
          </Link>

          <DarkModeSwitch />
        </div>

        <button className="logout-button">
          <BiSolidExit className="logout-icon" />
        </button>
      </div>
    </nav>
  );

  return content;
};

export default UserNav;
