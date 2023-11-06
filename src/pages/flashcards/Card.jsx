import React, { useState } from "react";
import "./Card.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../configuration/firebase-config";
import Swal from "sweetalert2";
import { BsTrashFill } from "react-icons/bs";

const Card = ({ question, answer, cardID }) => {
  const [removed, setRemoved] = useState(false);

  const deleteCard = (cardID) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(doc(db, "flashcards", cardID));
        Swal.fire("Deleted!", `Card has been deleted.`, "success");
        setRemoved(true);
      }
    });
  };
  return (
    <div className={`card ${removed ? "hidden" : ""}`}>
      <div className="card-content">
        <div className="card-front">{question}</div>
        <div className="card-back">
          <p>{answer}</p>
          <button
            onClick={() => deleteCard(cardID)}
            className=" absolute top-0 right-0 p-1 text-sm rounded-full bg-gray-400 text-white -translate-y-2 duration-200 hover:bg-red-700"
          >
            <BsTrashFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
