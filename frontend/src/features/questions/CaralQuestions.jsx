import "../../styles/questionsStyle.css";

const CaralQuestions = () => {
  const content = (
    <section className="questions__section">

      <div className="title-questions">
        <h2>TEST PARCIAL</h2>
        <h3>Question test?</h3>
      </div>

      <form className="options-questions">

        <label className="option-question">
          <input type="radio" name="question" id="q1" /> Q1?
        </label>

        <label className="option-question">
          <input type="radio" name="question" id="q2" />Q2?
        </label>

        <label className="option-question">
          <input type="radio" name="question" id="q3" />Q3?
        </label>

        <button className="choose-button">Elegir</button>
      </form>
    </section>
  );

  return content;
};

export default CaralQuestions;
