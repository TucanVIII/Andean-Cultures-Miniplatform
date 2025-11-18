import { Outlet } from "react-router-dom"

import UserNav from "./userComponents/UserNav.jsx";

const UserMainMenu = () => {
  const content = (
    <>
      <UserNav />
      <main className="content-container">
        <Outlet />
      </main>
    </>
  );
  return content;
};

export default UserMainMenu;
