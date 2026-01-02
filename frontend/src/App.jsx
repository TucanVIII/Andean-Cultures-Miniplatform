import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Public from "./components/Public.jsx";
import Login from "./features/auth/Login.jsx";
import UserMainMenu from "./components/UserMainMenu.jsx";
import MainMenuContent from "./components/mainMenuComponents/MainMenuContent.jsx";
import SectionsLayout from "./components/mainMenuComponents/SectionsLayout.jsx";
import ProfileUser from "./components/mainMenuComponents/ProfileUser.jsx";
import AdministratorSection from "./components/mainMenuComponents/AdministratorSection.jsx";
import Prefetch from "./features/auth/Prefetch.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        {/* Protected routes */}
        <Route element={<Prefetch />}>
          <Route path="menu" element={<UserMainMenu />}>
            <Route index element={<MainMenuContent />} />
            <Route path="sections" element={<SectionsLayout />} />
            <Route path="profile" element={<ProfileUser />} />
            <Route path="administrator" element={<AdministratorSection />} />
          </Route>
          {/* End protected routes */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
