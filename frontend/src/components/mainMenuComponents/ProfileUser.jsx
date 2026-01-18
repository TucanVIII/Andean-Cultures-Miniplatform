import { useState, useEffect } from "react";
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../../features/users/usersApiSlice.js";
import useAuth from "../../hooks/useAuth.js";
import calcSectionProgress from "../../utils/calcSectionProgress.js";
import { useGenerateCertificateMutation } from "../../features/certificate/certificateApiSlice.js";
import Certificate from "../../features/certificate/Certificate.jsx";

import UserProgressCircle from "../../features/users/UserProgressCircle.jsx";
import Loader from "../../features/ui/Loader.jsx";
import { notify } from "../../features/ui/notify.js";

import { FaRegSave, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

import "../../styles/ProfileUser.css";

const ProfileUser = () => {
  const { userId } = useAuth();
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserByIdQuery();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const [generateCertificate, { isLoading: isGenerating }] =
    useGenerateCertificateMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [originalData, setOriginalData] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const courseCompleted = user?.sections?.every(
    (s) =>
      s.theoryCompleted && s.videoCompleted && s.quiz.status === "completed"
  );

  const [formData, setFormData] = useState({
    email: "",
    role: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      const data = {
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        password: "",
        confirmPassword: "",
      };
      setFormData(data);
      setOriginalData(data);
    }
  }, [user]);

  const onSave = async () => {
    try {
      await updateUser({
        id: user._id,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password || undefined,
      }).unwrap();
      setIsEditing(false);
      setFormData((prev) => ({
        ...prev,
        password: "",
        confirmPassword: "",
      }));
    } catch (err) {
      console.error("Error on save: ", err);
    }
  };

  const onCancel = () => {
    setIsEditing(false);
    setFormData({
      ...originalData,
      password: "",
      confirmPassword: "",
    });
  };

  const onModify = () => {
    setOriginalData(formData);
    setIsEditing(true);
  };

  const onVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const onClose = () => {
    setShowCertificate(false)
  };

  const handleGenerateCertificate = async () => {
    try {
      if (!user.certificate) {
        await generateCertificate().unwrap();
        notify.success("Certificado generado!");
      }
      setShowCertificate(true);
    } catch (err) {
      console.error(err);
      notify.error("Fallo al generar el certificado");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <section className="profile-user__container">
      <div className="edit-user__container">
        <div className="inputs__container">
            <h2 className="edit-user__title">Editar perfil</h2>

          <label className="emailUser input__style">
            Email:
            <input
              placeholder="Email"
              type="text"
              name="email"
              id="email"
              className="user__input"
              value={formData.email}
              disabled
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
              value={formData.role}
              disabled
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
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              disabled={!isEditing}
            />
            <span className="input-border"></span>
          </label>

          <label className="surnameUser input__style">
            Apellidos:
            <input
              placeholder="Apellidos"
              type="text"
              name="lastnameUser"
              id="lastnameUser"
              className="user__input"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              disabled={!isEditing}
            />
            <span className="input-border"></span>
          </label>

          <label className="changePasswordUser input__style">
            Cambiar contraseña:
            <input
              placeholder="Contraseña"
              type={isVisible ? "text" : "password"}
              name="password"
              id="password"
              className="user__input"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              disabled={!isEditing}
            />
            {isEditing && (
              <button
                type="button"
                className="style__button"
                onClick={onVisible}
              >
                {isVisible ? (
                  <FaEyeSlash className="faIcon__style" />
                ) : (
                  <FaEye className="faIcon__style" />
                )}
              </button>
            )}
            <span className="input-border"></span>
          </label>

          <label className="confirmChangePasswordUser input__style">
            Repetir contraseña:
            <input
              placeholder="Confirmar contraseña"
              type={isVisible ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className="user__input"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              disabled={!isEditing}
            />
            {isEditing && (
              <button
                type="button"
                className="style__button"
                onClick={onVisible}
              >
                {isVisible ? (
                  <FaEyeSlash className="faIcon__style" />
                ) : (
                  <FaEye className="faIcon__style" />
                )}
              </button>
            )}
            <span className="input-border"></span>
          </label>
        </div>

        <div className="modify__buttons">
          {!isEditing ? (
            <button className="style__button" onClick={onModify}>
              <FaPencil className="modify__icon" />
            </button>
          ) : (
            <div className="column">
              <button className="style__button" onClick={onSave}>
                <FaRegSave className="save__icon" />
              </button>

              <button className="style__button" onClick={onCancel}>
                <FaTimes className="faIcon__style" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="progress-user__container">
        <div className="progress-user__title">
          <h2>Cursos completados</h2>
        </div>

        <div className="circleProgress__container">
          <div className="circle-progressbar__container">
            {user.sections.map((section) => {
              const progress = calcSectionProgress(section);
              return (
                <UserProgressCircle
                  key={section.sectionId}
                  title={section.sectionTitle}
                  progress={progress}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="certificate-user__container">
        <h2 className="certificate__title">Certificado:</h2>
        {courseCompleted && (
          <button className="score-button" onClick={handleGenerateCertificate}>Ver certificado</button>
        )}

        <Certificate open={showCertificate} onClose={onClose} />
      </div>
    </section>
  );
};

export default ProfileUser;
