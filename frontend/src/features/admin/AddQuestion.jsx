import { useState } from "react";

import SuccessMessage from "../ui/SuccessMessage.jsx";
import ErrorMessage from "../ui/ErrorMessage.jsx";
import { useAddNewQuestionMutation } from "../questions/questionsApiSlice.js";

import { FaTimes, FaRegSave } from "react-icons/fa";
import "../../styles/tablesStyle.css";

const AddQuestion = ({ sectionId, onClose }) => {
  const [statement, setStatement] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState(null);

  const [addNewQuestion, { isLoading }] = useAddNewQuestionMutation();

  const validate = () => {
    const newErrors = {};

    if (!statement.trim()) {
      newErrors.statement = "La pregunta es obligatoria";
    }

    if (options.some((opt) => !opt.trim())) {
      newErrors.options = "Todas las opciones son obligatorias";
    }

    if (!correctAnswer) {
      newErrors.correctAnswer = "Debe seleccionar la respuesta correcta";
    } else if (!options.includes(correctAnswer)) {
      newErrors.correctAnswer = "La respuesta debe coincidir con una opción";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setStatement("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
    setErrors({});
  };

  const onSave = async () => {
    if (!validate()) return;

    setSuccess(false);
    setApiError(null);

    try {
      await addNewQuestion({
        sectionId,
        statement,
        options,
        correctAnswer,
      }).unwrap();
      resetForm();
    } catch (err) {
      console.error("Error al crear la pregunta", err);
      setApiError("Fallo al ingresar la pregunta");
    }
  };

  return (
    <section className="questions-main__container">
      <div className="questions__subcontainer">
        <div className="inner-title">
          <h2>Nueva pregunta:</h2>
          <button className="style__button" onClick={onClose}>
            <FaTimes className="faIcon__style close__button" />
          </button>
        </div>

        <div className="questions__card">
          <label>
            Pregunta:
            <input
              type="text"
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              required
            />
          </label>

          <div className="options__container">
            <h4>Opciones:</h4>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => {
                  const copy = [...options];
                  copy[index] = e.target.value;
                  setOptions(copy);
                }}
              />
            ))}
          </div>

          <label>
            Respuesta correcta:
            <select
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            >
              <option value="">Seleccionar:</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="form-actions">
            <button
              onClick={onSave}
              className="style__button"
            >
              <FaRegSave className="faIcon__style" />
            </button>
          </div>
        </div>
      </div>
      {success && <SuccessMessage message="Ingreso de pregunta exitoso" />}

      {apiError && <ErrorMessage message={apiError} />}
    </section>
  );
};

export default AddQuestion;
