import { Outlet } from 'react-router-dom';

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