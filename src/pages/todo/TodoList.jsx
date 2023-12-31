import React, { useEffect, useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../configuration/firebase-config";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { BsTrashFill } from "react-icons/bs";

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

  const deleteTodo = (todoID) => {
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
        await deleteDoc(doc(db, "userTodos", todoID));
        Swal.fire("Deleted!", `Card has been deleted.`, "success");
        // setRemoved(true);
        console.log("Todo Deleted");
      }
    });
  };

  useEffect(() => {
    // Update the initial state when the component mounts or when todos change
    if (todos.length > 0) {
      setInitialFinishedState(todos[0].finished);
    }
    console.log(todos);
  }, []);

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
            className={`w-full min-h-[12rem] relative p-4 font-medium text-lg text-center text-white rounded-lg ${
              todo.bg
            } ${todo.finished ? "bg-opacity-60" : "bg-opacity-90"}`}
          >
            <div className="flex justify-between w-full mb-5">
              <p className="text-xl">{todo.title}</p>
              <input
                type="checkbox"
                checked={todo.finished}
                onChange={() => checkTodo(todo)}
              />
            </div>

            <p className=" font-normal text-md text-left">
              {todo.details ? todo.details : ""}
            </p>

            <button
              onClick={() => deleteTodo(todo.id)}
              className=" absolute top-0 right-0 p-1 text-sm rounded-full bg-gray-400 text-white -translate-y-2 duration-200 hover:bg-red-700"
            >
              <BsTrashFill />
            </button>
          </motion.div>
        ))
      ) : (
        <p>No Todos Yet..</p>
      )}
    </div>
  );
};

export default TodoList;
