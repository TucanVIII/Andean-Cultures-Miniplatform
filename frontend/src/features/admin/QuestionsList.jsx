import { useGetAllQuestionsQuery } from "../questions/questionsApiSlice.js";

import EditQuestion from "./EditQuestion.jsx";
import { FaTimes } from "react-icons/fa";
import Loader from "../ui/Loader.jsx";

const QuestionsList = ({ sectionId, onClose }) => {
  const {
    data: questions,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllQuestionsQuery(sectionId ? { sectionId } : undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = questions;

    return (
      <section className="questions-main__container">
        <div className="questions__subcontainer">
          <div className="inner-title">
            <h2>Modificar preguntas:</h2>
            <button className="style__button" onClick={onClose}>
              <FaTimes className="faIcon__style close__button" />
            </button>
          </div>

          <div className="questions__edit">
            {ids.length === 0 ? (
              <p>No hay preguntas en esta sección</p>
            ) : (
              ids.map((questionId) => (
                <EditQuestion key={questionId} questionId={questionId} sectionId={sectionId}/>
              ))
            )}
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default QuestionsList;
