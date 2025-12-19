import { useGetQuestionsQuery } from "../questions/questionsApiSlice.js";

import QuestionEdit from "./QuestionEdit.jsx";

import Loader from "../Loader.jsx";

const QuestionsList = () => {
  const {
    data: questions,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetQuestionsQuery();

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
          <h2>Administrar preguntas:</h2>
          <div className="questions__edit">
            {ids.map((questionId) => (
              <QuestionEdit key={questionId} questionId={questionId} />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default QuestionsList;
