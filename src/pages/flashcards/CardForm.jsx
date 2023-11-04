import React, { useState } from "react";

const CardForm = ({ cardInfos, setCardInfos }) => {
  const [questionInput, setQuestionInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");
  return (
    <form
      className="block mb-20"
      onSubmit={(e) => {
        e.preventDefault();
        const newInfo = [
          ...cardInfos,
          { question: questionInput, answer: answerInput },
        ];
        setCardInfos(newInfo);
        setAnswerInput("");
        setQuestionInput("");
      }}
    >
      <input
        required
        type="text"
        placeholder="Question..."
        onChange={(e) => setQuestionInput(e.target.value)}
        value={questionInput}
        className="border-2 border-gray-700 rounded p-2 m-3 w-full md:w-fit"
      />
      <input
        required
        type="text"
        placeholder="Answer..."
        onChange={(e) => setAnswerInput(e.target.value)}
        value={answerInput}
        className="border-2 border-gray-700 rounded p-2 m-3 w-full md:w-fit"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded block mx-auto md:mx-0 md:inline-block"
      >
        Generate
      </button>
    </form>
  );
};

export default CardForm;
