import { useState } from "react";

function LessonCard({ data }) {

  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const handleOptionClick = (
    questionIndex,
    option
  ) => {

    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option
    });
  };

  return (

    <div className="lessonWrapper">

      <div className="lessonSection">

        <div className="sectionLabel">
          EXPLANATION
        </div>

        <p className="lessonExplanation">
          {data.explanation}
        </p>

      </div>

      <div className="divider"></div>

      <div className="lessonSection">

        <div className="sectionLabel">
          MULTIPLE CHOICE ({data.mcqs.length})
        </div>

        {

          data.mcqs.map((q, index) => {

            const selected =
              selectedAnswers[index];

            const isCorrect =
              selected === q.answer;

            return (

              <div
                key={index}
                className="questionCard"
              >

                <div className="questionHeader">

                  <span className="questionNumber">
                    0{index + 1}
                  </span>

                  <h3>
                    {q.question}
                  </h3>

                </div>

                <div className="optionsGrid">

                  {
                    q.options.map((option, i) => {

                      const isSelected =
                        selected === option;

                      const isCorrectOption =
                        option === q.answer;

                      return (

                        <button
                          key={i}
                          className={`
                            optionButton
                            ${
                              isSelected
                                ? "selected"
                                : ""
                            }
                            ${
                              isSelected &&
                              isCorrect
                                ? "correct"
                                : ""
                            }
                            ${
                              isSelected &&
                              !isCorrect
                                ? "wrong"
                                : ""
                            }
                            ${
                              selected &&
                              isCorrectOption
                                ? "showCorrect"
                                : ""
                            }
                          `}
                          onClick={() =>
                            handleOptionClick(
                              index,
                              option
                            )
                          }
                        >
                          {option}
                        </button>

                      );
                    })
                  }

                </div>

                {
                  selected && (

                    <div className="answerText">

                      Correct answer:
                      <span>
                        {" "}
                        {q.answer}
                      </span>

                    </div>

                  )
                }

              </div>

            );
          })
        }

      </div>

    </div>
  );
}

export default LessonCard;