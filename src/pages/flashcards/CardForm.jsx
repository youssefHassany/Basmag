import React, { useState } from "react";
import { auth, db } from "../../configuration/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const CardForm = ({ cardInfos, setCardInfos }) => {
  const [questionInput, setQuestionInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");

  const addCard = async (e) => {
    e.preventDefault();

    try {
      const newCardData = {
        question: questionInput,
        answer: answerInput,
        userID: auth?.currentUser?.uid,
      };

      const flashcardsCollectionRef = collection(db, "flashcards");
      await addDoc(flashcardsCollectionRef, newCardData);
      const newInfo = [
        ...cardInfos,
        { question: questionInput, answer: answerInput },
      ];
      setCardInfos(newInfo);
      setAnswerInput("");
      setQuestionInput("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form
      onSubmit={(e) => addCard(e)}
      className="block mb-20 bg-white p-5 rounded-xl shadow-lg"
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
        className="px-4 py-2 font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded block mx-auto md:mx-0 md:inline-block"
      >
        Generate
      </button>
    </form>
  );
};

export default CardForm;
