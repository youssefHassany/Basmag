import React, { useContext, useState } from "react";
import { auth } from "../../configuration/firebase-config";
import { addDoc } from "firebase/firestore";
import { DataContext } from "../../Content";
import Swal from "sweetalert2";

const AddSubjectForm = ({ formIsVisible, setFormIsVisible }) => {
  const { subjectsDataCollectionRef, subjects, setSubjects } =
    useContext(DataContext);
  const [subjectTitle, setSubjecctTitle] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setSubjecctTitle(val);
  };

  const submitSubject = async (e) => {
    e.preventDefault();
    try {
      const newSubData = {
        subName: subjectTitle,
        hoursSpent: 0,
        userID: auth?.currentUser?.uid,
      };
      await addDoc(subjectsDataCollectionRef, newSubData);
      setSubjecctTitle("");
      Swal.fire("Done!", "Subject Added Successfully!", "success");
      setFormIsVisible(false);
      setSubjects([...subjects, newSubData]);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex items-center justify-center ${
        formIsVisible ? "" : "hidden"
      }`}
    >
      <form
        onSubmit={(e) => submitSubject(e)}
        className="w-11/12 md:w-3/5 h-52 bg-white rounded p-4 flex flex-col md:flex-row items-center justify-center gap-3 relative"
      >
        <button
          onClick={() => setFormIsVisible(false)}
          className="absolute top-0 right-0 px-4 py-2 text-black font-bold bg-gray-400 rounded-full translate-x-2 -translate-y-2"
        >
          X
        </button>
        <input
          type="text"
          id="sub-title"
          name="sub-title"
          placeholder="Subject Title..."
          className="border-2 border-gray-700 p-2 rounded"
          required
          onChange={handleChange}
          value={subjectTitle}
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
