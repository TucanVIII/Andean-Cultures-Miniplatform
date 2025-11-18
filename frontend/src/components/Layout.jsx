import { Outlet } from 'react-router-dom';
import UserNav from './userComponents/UserNav';

const Layout = () => {
  return (
    <>
    <div className="dash-layout__container">
          <Outlet/>
    </div>
    </>
  )
}

export default Layout