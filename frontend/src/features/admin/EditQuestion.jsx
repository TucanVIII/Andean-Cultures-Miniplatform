import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectQuestionById } from "../questions/questionsApiSlice.js";
import {
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
  useGetAllQuestionsQuery,
} from "../questions/questionsApiSlice.js";

import { AiFillDelete } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const EditQuestion = ({ questionId, sectionId }) => {
  const { question } = useGetAllQuestionsQuery(
    sectionId ? { sectionId } : undefined,
    {
      selectFromResult: ({ data }) => ({
        // Buscamos dentro de las entidades por ID
        question: data?.entities[questionId],
      }),
    }
  );

  const [statement, setStatement] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [updateQuestion] = useUpdateQuestionMutation();
  const [deleteQuestion] = useDeleteQuestionMutation();

  useEffect(() => {
    if (question) {
      setStatement(question.statement);
      setOptions(question.options ?? []);
      setCorrectAnswer(question.correctAnswer ?? "");
    }
  }, [question]);

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

  const onDelete = async () => {
    await deleteQuestion({
      id: questionId,
      sectionId: question.sectionId,
    });
  };

  if (!question) {
    return null;
  }

  return (
    <div className="questions__card">
      <label>
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
            key={index}
            disabled={!isEditing}
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
          disabled={!isEditing}
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          required
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
        {!isEditing ? (
          <button onClick={onModify} className="style__button">
            <FaPencil className="faIcon__style" />
          </button>
        ) : (
          <div className="modify__buttons">
            <button onClick={onSave} className="style__button">
              <FaRegSave className="faIcon__style" />
            </button>
            <button onClick={onDelete} className="style__button">
              <AiFillDelete className="faIcon__style" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditQuestion;
