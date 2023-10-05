import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { ToastContainer } from "react-toastify";
import TodoList from "./TodoList";
import { auth } from "../../configuration/firebase-config";
import { db } from "../../configuration/firebase-config";
import { getDocs, collection } from "firebase/firestore";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const getUserTodos = async () => {
    try {
      const allTodos = await getDocs(collection(db, "userTodos"));
      const currentUserTodos = allTodos.docs
        .map((doc) => ({
          ...doc.data(),
        }))
        .filter((todo) => todo.userID == auth?.currentUser?.uid);
      setTodos(currentUserTodos);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserTodos();
  }, [todos]);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
      <ToastContainer />
    </div>
  );
};

export default Todo;
