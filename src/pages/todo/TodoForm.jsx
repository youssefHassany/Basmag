import React, { useState } from "react";
import { auth } from "../../configuration/firebase-config";
import { db } from "../../configuration/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const TodoForm = ({ todos, setTodos }) => {
  const [todoInp, setTodoInp] = useState("");
  const [selectedColor, setSelectedColor] = useState("bg-amber-500");

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const todoObj = {
        title: todoInp,
        finished: false,
        bg: selectedColor,
        userID: auth?.currentUser?.uid,
      };
      await addDoc(collection(db, "userTodos"), todoObj);
      toast.success("Todo Added");
      setTodoInp("");
      const newTodos = [...todos, todoObj];
      setTodos(newTodos);
    } catch (err) {
      console.error(err);
      toast.error("Failed To Add Todo");
    }
  };

  return (
    <form
      onSubmit={(e) => addTodo(e)}
      className="w-10/12 md:w-[500px] bg-white rounded-xl shadow p-4 mx-auto my-5 flex flex-col md:flex-row items-center justify-between gap-3"
    >
      <input
        required
        type="text"
        placeholder="Add Todo..."
        className="border-2 border-black rounded p-2"
        value={todoInp}
        onChange={(e) => setTodoInp(e.target.value)}
      />

      <select
        name=""
        className=" cursor-pointer border-2 border-black rounded py-1 px-3"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="bg-amber-300">Yellow</option>
        <option value="bg-red-500">Red</option>
        <option value="bg-green-500">Green</option>
      </select>

      <button
        type="submit"
        className=" cursor-pointer border-2 bg-indigo-600 text-white font-medium rounded-lg py-2 px-4"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
