import { Routes,Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Public from "./components/Public.jsx";
import Login from "./components/Login.jsx";
import UserMainMenu from "./components/UserMainMenu.jsx";
import MainMenuContent from "./components/mainMenuComponents/MainMenuContent.jsx";
import SectionsLayout from"./components/mainMenuComponents/SectionsLayout.jsx";
import ProfileUser from "./components/mainMenuComponents/ProfileUser.jsx";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Public />}/>
        <Route path="login" element={<Login />}/>
        {/* Protected routes */}
        <Route path="menu" element={<UserMainMenu />}>
          <Route index element={<MainMenuContent />} />
          <Route path="sections" element={<SectionsLayout />} />
          <Route path="profile" element={<ProfileUser />} />
        </Route>{/* End protected routes */}
      </Route>
    </Routes>
  );
}

export default App;
