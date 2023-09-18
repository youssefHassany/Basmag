import React from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/not found/NotFound";
import Todo from "./pages/todo/Todo";
import FlashCards from "./pages/flashcards/FlashCards";
import Quiz from "./pages/quiz/Quiz";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <section className="p-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flashcards" element={<FlashCards />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Content;
