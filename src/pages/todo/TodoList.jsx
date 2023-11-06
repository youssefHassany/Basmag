import React, { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../configuration/firebase-config";
import { motion } from "framer-motion";

const TodoList = ({ todos }) => {
  // Assuming initialFinishedState is a piece of state that holds the initial checkbox state
  // Initialize it with a default value
  const [initialFinishedState, setInitialFinishedState] = useState(false);

  const checkTodo = async (todo) => {
    try {
      const todoRef = doc(db, "userTodos", todo.id);
      await updateDoc(todoRef, {
        finished: !todo.finished,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Update the initial state when the component mounts or when todos change
    if (todos.length > 0) {
      setInitialFinishedState(todos[0].finished);
    }
  }, [todos]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3">
      {todos ? (
        todos.map((todo, idx) => (
          <motion.div
            key={idx}
            transition={{ delay: 0.3 * idx }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`w-full h-full p-4 font-medium text-lg text-center text-white rounded-lg ${
              todo.bg
            } flex justify-between items-center ${
              todo.finished ? "bg-opacity-60" : "bg-opacity-90"
            }`}
          >
            <p>{todo.title}</p>
            <input
              type="checkbox"
              checked={todo.finished}
              onChange={() => checkTodo(todo)}
            />
          </motion.div>
        ))
      ) : (
        <p>No Todos Yet..</p>
      )}
    </div>
  );
};

export default TodoList;
