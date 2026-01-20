import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSignupMutation } from "./authApiSlice.js";
import { notify } from "../ui/notify.js";

import Loader from "../ui/Loader.jsx";

const Signup = () => {
  const userRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [signup, { isLoading }] = useSignupMutation();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({
        email,
        firstName,
        lastName,
        password,
      }).unwrap();
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      notify.success("Revisa tu email para verificar tu cuenta");
      navigate("/login");

    } catch (err) {
      if (!err.status) {
        notify.warning("Fallo en el servidor!");
      } else {
        notify.error("Error al registrarse");
      }
    }
  };

  const handleNameInput = (e) => setFirstName(e.target.value);
  const handleLastNameInput = (e) => setLastName(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  if (isLoading) return <Loader />;

  const content = (
    <div>
      <h1 className="title">SIGN UP</h1>
      <form action="" className="form-container" onSubmit={handleSubmit}>
        <div className="user-name">
          <div className="wave-group name">
            <input
              type="text"
              className="input"
              ref={userRef}
              value={firstName}
              onChange={handleNameInput}
              required={true}
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                N
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                O
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                M
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                B
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                R
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                E
              </span>
            </label>
          </div>

          <div className="wave-group lastName">
            <input
              type="text"
              className="input"
              value={lastName}
              onChange={handleLastNameInput}
              required={true}
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                P
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                E
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                L
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                L
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                I
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                D
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                O
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                S
              </span>
            </label>
          </div>
        </div>

        <div className="wave-group">
          <input
            type="text"
            className="input"
            value={email}
            onChange={handleEmailInput}
            required={true}
          />
          <span className="bar"></span>
          <label className="label">
            <span className="label-char" style={{ "--index": 0 }}>
              E
            </span>
            <span className="label-char" style={{ "--index": 1 }}>
              M
            </span>
            <span className="label-char" style={{ "--index": 2 }}>
              A
            </span>
            <span className="label-char" style={{ "--index": 3 }}>
              I
            </span>
            <span className="label-char" style={{ "--index": 4 }}>
              L
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

        <div className="buttons__container">
          <button
            className="login backHome"
            type="button"
            onClick={handleHomeClick}
          >
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
      </form>
    </div>
  );
  return content;
};

export default Signup;
