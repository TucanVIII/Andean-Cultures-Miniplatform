import UserNav from "./userComponents/UserNav.jsx";

import "../styles/userMainMenu.css";

const UserMainMenu = () => {
  const content = (
    <>
      <UserNav />
      <div className="menu-body__container">

        <div className="title-menu__container">
          <h1 className="title-menu">¡Te damos la bienvenida, USER!</h1>
        </div>

        <div className="start-button__container">
          <button className="start-button">Iniciar</button>
        </div>

        <div className="faq-container">
          <h3>¿Dudas o problemas?</h3>
          <div className="buttons-container">
            <button className="faq-button">Dudas</button>
            <button className="support-button">Soporte</button>
          </div>
        </div>

      </div>
    </>
  );
  return content;
};

export default UserMainMenu;
