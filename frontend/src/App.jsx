import { Routes,Route } from "react-router-dom";

import "./index.css"

import Layout from "./components/Layout.jsx";
import Public from "./components/Public.jsx";
import Login from "./components/Login.jsx";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* Public routes */}
        <Route index element={<Public/>}/>
        <Route path="login" element={<Public/>}/>
        {/* Protected routes */}
        <Route>

        </Route>{/* End protected routes */}
      </Route>
    </Routes>
  );
}

export default App;
