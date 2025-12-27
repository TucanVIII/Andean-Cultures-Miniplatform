import { useState } from "react";
import { useGetQuizQuestionQuery } from "./questionsApiSlice.js";
import Loader from "../ui/Loader.jsx";

import "../../styles/questionsStyle.css";

const QuestionsTest = ({ sectionId }) => {
  const { data: questions = [], isLoading, isError } = useGetQuizQuestionQuery(sectionId, { skip: !sectionId });

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleSelect = (questionId, option) => {
    setSelectedAnswers((s) => ({ ...s, [questionId]: option }));
  };

  const getCorrectAnswer = (q) => q.correctAnswer ?? q.answer ?? q.correct ?? q.rightAnswer ?? q.correctOption ?? null;

  const handleCheck = (question) => {
    const qid = question._id;
    const selected = selectedAnswers[qid];
    const correct = getCorrectAnswer(question);
    if (correct === null) {
      setFeedback((f) => ({ ...f, [qid]: "Respuesta no definida desde el servidor" }));
      return;
    }
    const ok = String(selected) === String(correct);
    setFeedback((f) => ({ ...f, [qid]: ok ? "Correcto" : "Incorrecto" }));
  };

  if (!sectionId) return null;

  if (isLoading) return <Loader />;

  if (isError) return <p className="errmsg">Error cargando preguntas</p>;

  return (
    <section className="questions__section">
      {questions.length === 0 ? (
        <p>No hay preguntas para esta sección.</p>
      ) : (
        questions.map((question) => (
          <div className="question-block" key={question._id}>
            <div className="title-questions">
              <h3>{question.statement}</h3>
            </div>

            <div className="options-questions">
              {(question.options || []).map((option, index) => (
                <label className="option-question" key={index}>
                  <input
                    type="radio"
                    name={`q-${question._id}`}
                    value={option}
                    checked={selectedAnswers[question._id] === option}
                    onChange={() => handleSelect(question._id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="question-actions">
              <button className="choose-button" onClick={() => handleCheck(question)}>
                Verificar
              </button>
            </div>
              {feedback[question._id] && <span className="feedback">{feedback[question._id]}</span>}
          </div>
        ))
      )}
    </section>
  );
};

export default QuestionsTest;
