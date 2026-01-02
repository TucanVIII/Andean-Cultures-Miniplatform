import { useSendLogoutMutation } from "../../features/auth/authApiSlice.js";
import { BiSolidExit } from "react-icons/bi";
import { FaUser, FaPlayCircle, FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import DarkModeSwitch from "../../features/ui/DarkModeSwitch.jsx";
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useGetUserByIdQuery } from "../../features/users/usersApiSlice.js";
import useAuth from "../../hooks/useAuth.js";
import "../../styles/userNav.css";

import appLogo from "../../assets/appLogo.png";

const UserNav = () => {
  const { userId,isAdmin } = useAuth();
  const { data: user } = useGetUserByIdQuery(userId);
  const navigate = useNavigate();
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const content = (
    <nav className="navbar-container">
      <div className="app-logo__container">
        <Link to="/menu" className="appLogo">
          <img src={appLogo} alt="Logo de YACHAY" className="app-logo-img" />
          <h1 className="title">YACHAY</h1>
        </Link>
        <h2>Usuario: {user?.firstName}</h2>
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

          {(isAdmin) && <Link to="administrator">
            Administrador <RiAdminFill />
          </Link>}

          <DarkModeSwitch />
        </div>

        <button className="logout-button style__button" onClick={sendLogout}>
          <BiSolidExit className="faIcon__style" />
        </button>
      </div>
    </nav>
  );

  return content;
};

export default UserNav;
