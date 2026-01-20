import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

import "../../styles/authPage.css";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="login-container">
      <div className="login-menu">
        <div className="header">
          <button
            className={`btn btn-tab tab-effect ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            LOGIN
          </button>
          <button
            className={`btn btn-tab tab-effect ${activeTab === "signin" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            SIGN UP
          </button>
        </div>

        <div
          className={`body ${
            activeTab === "login" ? "tab-login-active" : "tab-signup-active"
          }`}
        >
          {activeTab === "login" && <Login />}
          {activeTab === "signin" && <Signup />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
