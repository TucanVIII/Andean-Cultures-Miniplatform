import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice.js";
import { useLoginMutation } from "./authApiSlice.js";
import usePersist from "../../hooks/usePersist.js";

import Loader from "../ui/Loader.jsx";
import { FcGoogle } from "react-icons/fc";
import "../../styles/login.css";

const Login = () => {
  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [persist,setPersist] = useState()

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { accessToken } = await login({ email,password }).unwrap()
      dispatch(setCredentials({ accessToken }))
      setEmail("")
      setPassword("")
      navigate("/menu")
    } catch(err) {
      if (!err.status) {
        setErrMsg("No server response");
      } else if (err.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  }

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleToggle = (e) => setPersist(prev => !prev)

  useEffect(() => {
    userRef.current.focus();
  }, []);

  if (isLoading) return <Loader />;

  const content = (
    <div className="login-container">
      <div className="login-menu">
        <h1 className="title">LOGIN</h1>
        <form action="" className="form-container" onSubmit={handleSubmit}>
          <div className="wave-group">
            <input
              type="text"
              className="input"
              ref={userRef}
              value={email}
              onChange={handleEmailInput}
              required={true}
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                U
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                S
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                U
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                R
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                I
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                0
              </span>
            </label>
          </div>

          <div className="wave-group">
            <input
              type="password"
              className="input"
              value={password}
              onChange={handlePasswordInput}
              required={true}
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                C
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                O
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                N
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                T
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                R
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                S
              </span>
              <span className="label-char" style={{ "--index": 7 }}>
                E
              </span>
              <span className="label-char" style={{ "--index": 8 }}>
                Ñ
              </span>
              <span className="label-char" style={{ "--index": 9 }}>
                A
              </span>
            </label>
          </div>

          <label htmlFor="persist" className="form__persist">
            <input type="checkbox" className="form__checkbox" id="persist" onChange={handleToggle} checked={persist}/> Confiar en este dispositivo
          </label>

          <div className="buttons__container">
            <button className="login backHome" type="button" onClick={handleHomeClick}>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
                className="back-arrow"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
              <span className="hover-underline-animation"> Regresar </span>
            </button>
            <button className="login" type="submit">
              <span className="hover-underline-animation"> Ingresar </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>

          <button type="button">
            <FcGoogle />
          </button>
        </form>
      </div>
    </div>
  );
  return content;
};

export default Login;
