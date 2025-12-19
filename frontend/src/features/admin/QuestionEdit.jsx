import { useSelector } from "react-redux";
import { useState } from "react";
import { selectQuestionById } from "../questions/questionsApiSlice.js";
import { useUpdateQuestionMutation } from "../questions/questionsApiSlice.js";

import { FaRegSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const QuestionEdit = ({ questionId }) => {
  const question = useSelector((state) =>
    selectQuestionById(state, questionId)
  );

  const [statement, setStatement] = useState(question.statement);
  const [options, setOptions] = useState([...question.options]);
  const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer);

  const [isEditing, setIsEditing] = useState(false);
  const [updateQuestion] = useUpdateQuestionMutation();

  const onSave = async () => {
    await updateQuestion({
      id: questionId,
      sectionId: question.sectionId,
      statement,
      options,
      correctAnswer,
    });
    setIsEditing(false);
  };

  const onModify = () => {
    setIsEditing(true);
  };

  return (
    <div className="questions__card">
      <label htmlFor="">
        Pregunta:
        <input
          type="text"
          disabled={!isEditing}
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          required
        />
      </label>

      <div className="options__container">
        <h4>Opciones:</h4>
        {options.map((option, index) => (
          <input
            type="text"
            disabled={!isEditing}
            key={index}
            value={option}
            onChange={(e) => {
              const copy = [...options];
              copy[index] = e.target.value;
              setOptions(copy);
            }}
          />
        ))}
      </div>

      <label htmlFor="">
        Respuesta correcta:
        <select
          disabled={!isEditing}
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          required
        >
          <option>Seleccionar:</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <div className="form-actions">
        {!isEditing ? (
          <button onClick={onModify} className="style__button">
            <FaPencil className="faIcon__style" />
          </button>
        ) : (
          <button onClick={onSave} className="style__button">
            <FaRegSave className="faIcon__style" />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionEdit;
