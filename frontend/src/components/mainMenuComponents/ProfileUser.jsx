import Loader from "../../features/ui/Loader.jsx";
import { FaRegSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { CircularProgressbar } from "react-circular-progressbar";
import QR_code_temp from "../../assets/QR_code_temp.svg";

import "../../styles/ProfileUser.css";

import { useGetUserByIdQuery } from "../../features/users/usersApiSlice.js";

const ProfileUser = ({ userId }) => {

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserByIdQuery(userId);

  let content;

  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  const percentage = 50;

  if (isSuccess) {
    content = (
      <section className="profile-user__container">
        <div className="edit-user__container">
          <div className="edit-user__title">
            <h2 className="edit-user__title">Editar perfil</h2>
          </div>

          <label className="emailUser input__style">
            Email:
            <input
              placeholder="Email"
              type="text"
              name="email"
              id="email"
              className="user__input"
              value={user.email}
            />
            <span className="input-border"></span>
          </label>
          <label className="roleUser input__style">
            Rol:
            <input
              placeholder="Rol"
              type="text"
              name="role"
              id="role"
              className="user__input"
              value={user.role}
            />
            <span className="input-border"></span>
          </label>
          <label className="nameUser input__style">
            Nombre:
            <input
              placeholder="Nombre"
              type="text"
              name="nameUser"
              id="nameUser"
              className="user__input"
              value={user.firstName}
            />
            <span className="input-border"></span>
            <FaPencil className="modify__icon" />
            <FaRegSave className="save__icon" />
          </label>
          <label className="surnameUser input__style">
            Apellidos:
            <input
              placeholder="Apellidos"
              type="text"
              name="lastnameUser"
              id="lastnameUser"
              className="user__input"
              value={user.lastName}
            />
            <span className="input-border"></span>
            <FaPencil className="modify__icon" />
            <FaRegSave className="save__icon" />
          </label>
          <label className="changePasswordUser input__style">
            Cambiar contraseña:
            <input
              placeholder="Contraseña"
              type="text"
              name="password"
              id="password"
              className="user__input"
            />
            <span className="input-border"></span>
            <FaPencil className="modify__icon" />
          </label>
          <label className="confirmChangePasswordUser input__style">
            Repetir contraseña:
            <input
              placeholder="Confirmar"
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              className="user__input"
            />
            <span className="input-border"></span>
            <FaRegSave className="save__icon" />
          </label>
        </div>

        <div className="progress-user__container">
          <div className="progress-user__title">
            <h2>Cursos completados</h2>
          </div>
          <div className="circleProgress__container">
            <div className="circle-progressbar__container">
              <h3 className="progress__title">Caral</h3>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <h3 className="note__title">Nota: X</h3>
            </div>
            <div className="circle-progressbar__container">
              <h3 className="progress__title">Wari</h3>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <h3 className="note__title">Nota: X</h3>
            </div>
            <div className="circle-progressbar__container">
              <h3 className="progress__title">Tiawanaku</h3>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <h3 className="note__title">Nota: X</h3>
            </div>
            <div className="circle-progressbar__container">
              <h3 className="progress__title">Inca</h3>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <h3 className="note__title">Nota: X</h3>
            </div>
          </div>
        </div>

        <div className="certificate-user__container">
          <h3 className="certificate__title">Certificado:</h3>
          <img src={QR_code_temp} alt="" />
        </div>
      </section>
    );
  }

  return content;
};

export default ProfileUser;
