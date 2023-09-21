import React, { createContext, useEffect, useState } from "react";
// pages
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/not found/NotFound";
import Todo from "./pages/todo/Todo";
import FlashCards from "./pages/flashcards/FlashCards";
import Quiz from "./pages/quiz/Quiz";
// routing
import { Route, Routes } from "react-router-dom";
// firebase
import { auth, db } from "./configuration/firebase-config";
import { getDocs, collection } from "firebase/firestore";
// context API
export const DataContext = createContext(null);

const Content = ({ setNavShown }) => {
  const subjectsDataCollectionRef = collection(db, "subjects");

  const [subjects, setSubjects] = useState([]);

  const getSubjectsData = async () => {
    try {
      const subData = await getDocs(subjectsDataCollectionRef);
      const filteredData = subData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSubjects(filteredData);
      // console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSubjectsData();
  }, []);

  // console.log(auth?.currentUser?.uid);
  return (
    <section
      onClick={() => setNavShown(false)}
      className="p-5 w-full min-h-screen"
    >
      <DataContext.Provider
        value={{
          subjects,
          setSubjects,
          subjectsDataCollectionRef,
          getSubjectsData,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flashcards" element={<FlashCards />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataContext.Provider>
    </section>
  );
};

export default Content;
