import { Link } from "react-router-dom";

import "../../styles/userMainMenu.css";

const MainMenuContent = () => {
const content = (
          <div className="menu-body__container">

        <div className="title-menu__container">
          <h1 className="title-menu">¡Te damos la bienvenida, USER!</h1>
        </div>

        <div className="start-button__container">
          <Link to="sections">
            <button className="start-button">Iniciar</button>
          </Link>
        </div>

        <div className="faq-container">
          <h3>¿Dudas o problemas?</h3>
          <div className="buttons-container">
            <button className="faq-button">Dudas</button>
            <button className="support-button">Soporte</button>
          </div>
        </div>

      </div>
)
  return content;
}

export default MainMenuContent;