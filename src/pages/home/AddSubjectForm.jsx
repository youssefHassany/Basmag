import React from "react";

const AddSubjectForm = ({ formIsVisible, setFormIsVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex items-center justify-center ${
        formIsVisible ? "" : "hidden"
      }`}
    >
      <form className="container h-52 bg-white rounded p-4 flex items-center justify-center gap-3 relative">
        <button
          onClick={() => setFormIsVisible(false)}
          className="absolute top-0 right-0 px-4 py-2 text-white bg-gray-500 rounded-full -translate-y-2"
        >
          X
        </button>
        <input
          type="text"
          id="sub-title"
          placeholder="Subject Title..."
          className="border-2 border-gray-700 p-2 rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded"
        >
          Add Subject
        </button>
      </form>
    </div>
  );
};

export default AddSubjectForm;
