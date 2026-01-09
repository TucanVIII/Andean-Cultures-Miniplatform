import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
    <div className="dash-layout__container">
      <ToastContainer position="top-right" autoClose={1000} />
          <Outlet/>
    </div>
    </>
  )
}

export default Layout