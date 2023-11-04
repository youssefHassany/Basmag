import React from "react";
import "./Card.css";

const Card = ({ question, answer }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-front">{question}</div>
        <div className="card-back">{answer}</div>
      </div>
    </div>
  );
};

export default Card;
