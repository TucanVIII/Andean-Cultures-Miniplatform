import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import appLogo from "../../assets/appLogo.png";

import "../../styles/authPage.css";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  const verificationAttempted = useRef(false);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleVerify = async () => {
    if (!token) {
      setStatus("error");
      setError("Token no encontrado");
      return;
    }

    setStatus("loading");
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/v2/auth/verify-email?token=${token}`, {
        method: "GET",
      });

      if (!res.ok) throw new Error("Invalid token");

      setStatus("success");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!verificationAttempted.current && token) {
      verificationAttempted.current = true;
      handleVerify();
    }
  }, [token]);

  return (
    <div className="verify__container">
      <div className="verify__inner">
        <img src={appLogo} alt="appLogo" />
        <h2>Verificación de email</h2>

        {status === "idle" && (
          <button className="logout-button style__button" onClick={handleVerify}>Verificar email</button>
        )}

        {status === "loading" && <h2>⏳ Verificando email...</h2>}

        {status === "success" && (
          <>
            <h2>✅ Email verificado correctamente</h2>
            <p>Ahora puedes iniciar sesión.</p>
            <button className="logout-button style__button" onClick={() => navigate("/login")}>Ir a Login</button>
          </>
        )}

        {status === "error" && (
          <>
            <h2>❌ {error}</h2>
            <p>Solicita un nuevo enlace de verificación.</p>
            <button className="logout-button style__button" onClick={handleVerify}>Reintentar</button>
          </>
        )}

      </div>
    </div>
  );
};

export default VerifyEmail;
