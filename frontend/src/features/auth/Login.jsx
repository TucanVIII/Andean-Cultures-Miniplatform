import "../../styles/login.css";

const Login = () => {


  const content = (
    <div className="login-container">
      <div className="login-menu">
        <h1 className="title">LOGIN</h1>
        <form action="" className="form-container">

          <div className="wave-group">
            <input type="text" className="input" required={true} />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{'--index': 0}}>U</span>
              <span className="label-char" style={{'--index': 1}}>S</span>
              <span className="label-char" style={{'--index': 2}}>U</span>
              <span className="label-char" style={{'--index': 3}}>A</span>
              <span className="label-char" style={{'--index': 4}}>R</span>
              <span className="label-char" style={{'--index': 5}}>I</span>
              <span className="label-char" style={{'--index': 6}}>0</span>
            </label>
          </div>

          <div className="wave-group">
            <input type="text" className="input" required={true} />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{'--index': 0}}>C</span>
              <span className="label-char" style={{'--index': 1}}>O</span>
              <span className="label-char" style={{'--index': 2}}>N</span>
              <span className="label-char" style={{'--index': 3}}>T</span>
              <span className="label-char" style={{'--index': 4}}>R</span>
              <span className="label-char" style={{'--index': 5}}>A</span>
              <span className="label-char" style={{'--index': 6}}>S</span>
              <span className="label-char" style={{'--index': 7}}>E</span>
              <span className="label-char" style={{'--index': 8}}>Ñ</span>
              <span className="label-char" style={{'--index': 9}}>A</span>
            </label>
          </div>

          <button className="login">
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

        </form>
      </div>
    </div>
  );
  return content;
};

export default Login;
