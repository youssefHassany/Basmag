import React, { useContext, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../configuration/firebase-config";
import { DataContext } from "../../Content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubjectsHoursForm = ({ hoursSpent, docID }) => {
  const { getSubjectsData } = useContext(DataContext);
  const [hrs, setHrs] = useState("");

  const addHrs = async () => {
    try {
      const subDoc = doc(db, "subjects", docID);
      await updateDoc(subDoc, { hoursSpent: Number(hoursSpent) + Number(hrs) });
      getSubjectsData();
      setHrs("");
      toast.success("Hours Added");
    } catch (err) {
      console.error(err);
    }
  };

  const decreaseHrs = async () => {
    try {
      const subDoc = doc(db, "subjects", docID);
      const newHoursSpent = Number(hoursSpent) - Number(hrs);
      if (newHoursSpent < 0) {
        await updateDoc(subDoc, { hoursSpent: 0 });
      } else {
        await updateDoc(subDoc, { hoursSpent: newHoursSpent });
      }
      getSubjectsData();
      setHrs("");
      toast.success("Hours Reduced");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center border-t-2 md:border-l-2 md:border-t-0">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addHrs();
        }}
        className="flex justify-between items-center gap-2 p-2 h-full"
      >
        <input
          type="number"
          placeholder="hours"
          required
          className="text-xl border-2 border-gray-600 w-20 rounded p-1"
          value={hrs}
          onChange={(e) => setHrs(e.target.value)}
        />
        <button
          type="submit"
          className="w-9 h-9 flex items-center justify-center rounded bg-indigo-500 font-bold text-xl text-gray-100"
        >
          +
        </button>
      </form>
      <button
        onClick={decreaseHrs}
        className="w-9 h-9 flex items-center justify-center rounded bg-red-500 font-bold text-xl text-gray-100"
      >
        -
      </button>
    </div>
  );
};

export default SubjectsHoursForm;
