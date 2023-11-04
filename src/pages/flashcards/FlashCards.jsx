import React, { useState } from "react";
import Card from "./Card";
import CardForm from "./CardForm";
import { motion } from "framer-motion";

const FlashCards = () => {
  const [cardInfos, setCardInfos] = useState([]);
  return (
    <div className="h-full w-full flex flex-col items-center flex-wrap gap-3">
      <CardForm cardInfos={cardInfos} setCardInfos={setCardInfos} />

      <div className="flex items-center justify-center flex-wrap gap-3">
        {cardInfos.map((card, idx) => (
          <motion.span
            key={idx}
            transition={{ delay: 0.3 * idx }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Card question={card.question} answer={card.answer} />
          </motion.span>
        ))}
      </div>
      {/* <Card question={"Q"} answer={"A"} /> */}
    </div>
  );
};

export default FlashCards;
