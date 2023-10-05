import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3">
      {todos ? (
        todos.map((todo, idx) => (
          <div
            key={idx}
            className={`w-32 h-32 text-center rounded-lg ${todo.bg} flex justify-center items-center`}
          >
            <p>{todo.title}</p>
          </div>
        ))
      ) : (
        <p>No Todos Yet..</p>
      )}
    </div>
  );
};

export default TodoList;
