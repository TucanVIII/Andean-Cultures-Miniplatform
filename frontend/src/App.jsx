import { Routes,Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Public from "./components/Public.jsx";
import Login from "./components/Login.jsx";
import UserMainMenu from "./components/UserMainMenu.jsx";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* Public routes */}
        <Route index element={<Public/>}/>
        <Route path="login" element={<Login/>}/>
        {/* Protected routes */}
        <Route path="mainmenu" element={<UserMainMenu/>}/>

        </Route>{/* End protected routes */}
    </Routes>
  );
}

export default App;
