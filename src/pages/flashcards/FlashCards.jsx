import React, { useState, useEffect } from "react";
import Card from "./Card";
import CardForm from "./CardForm";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../configuration/firebase-config";

const FlashCards = () => {
  const [cardInfos, setCardInfos] = useState([]);

  const getFlashCards = async () => {
    try {
      const flashcardsCollectionRef = collection(db, "flashcards");
      const cards = await getDocs(flashcardsCollectionRef);
      const filteredData = cards.docs.map((card) => ({
        ...card.data(),
        id: card.id,
      }));
      filterUserCards(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const filterUserCards = (allCards) => {
    const userCards = allCards.filter(
      (card) => card.userID === auth?.currentUser?.uid
    );
    setCardInfos(userCards);
  };

  useEffect(() => {
    getFlashCards();
  }, []);
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
            <Card
              question={card.question}
              answer={card.answer}
              cardID={card.id}
            />
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default FlashCards;
