import { useState } from "react";
import { useSubmitQuizAnswersMutation } from "../quizAnswers/quizAnswersApiSlice.js";
import { useGetQuizQuestionQuery } from "./questionsApiSlice.js";

import { notify } from "../ui/notify.js";
import Loader from "../ui/Loader.jsx";

import "../../styles/questionsStyle.css";

const QuestionsTest = ({ sectionId }) => {
  const {
    data: questions = [],
    isLoading,
    isError,
  } = useGetQuizQuestionQuery(sectionId, { skip: !sectionId });

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitQuizAnswers, { isLoading: isSubmitting }] =
    useSubmitQuizAnswersMutation();

  const handleSelect = (questionId, option) => {
    setSelectedAnswers((s) => ({ ...s, [questionId]: option }));
  };

  const handleSubmit = async () => {
    const answersSubmitted = Object.entries(selectedAnswers).map(
      ([questionId, userAnswer]) => ({ questionId, userAnswer })
    );

    if (answersSubmitted.length !== questions.length) {
      notify.info("Se debe responder todas las preguntas!");
      return;
    }

    try {
      await submitQuizAnswers({
        sectionId,
        answers: answersSubmitted,
      }).unwrap();
      notify.success("Respuestas enviadas");
    } catch (err) {
      console.error(err);
      notify.error("Error al guardar las respuestas");
    }
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
                <label className="option-question">
                  <input
                    type="radio"
                    name={`q-${question._id}`}
                    value={option}
                    checked={selectedAnswers[question._id] === option}
                    onChange={() => handleSelect(question._id, option)}
                  />
                  <span className="radio"></span>
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))
      )}
      <div>
        <button
          className="score-button"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Calificar
        </button>
      </div>
    </section>
  );
};

export default QuestionsTest;
