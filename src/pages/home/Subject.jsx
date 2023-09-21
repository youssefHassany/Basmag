import React, { useState } from "react";
import SubjectsHoursForm from "./SubjectsHoursForm";
import { BsTrashFill } from "react-icons/bs";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../configuration/firebase-config";
import Swal from "sweetalert2";

const Subject = ({ subName, hoursSpent, docID }) => {
  const [removed, setRemoved] = useState(false);
  const deleteSubject = (docID) => {
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
        await deleteDoc(doc(db, "subjects", docID));
        Swal.fire("Deleted!", `${subName} has been deleted.`, "success");
        setRemoved(true);
      }
    });
  };
  return (
    <div
      className={`w-10/12 mx-auto my-3 p-5 text-center rounded-xl bg-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-5 relative ${
        removed ? "hidden" : ""
      }`}
    >
      <div>
        <p className="text-2xl font-bold">{subName}</p>
        <p className="text-xl font-medium">
          Hours Spent:{" "}
          <span className="text-3xl text-indigo-500 font-bold">
            {hoursSpent}
          </span>{" "}
          Hrs
        </p>
      </div>
      <SubjectsHoursForm hoursSpent={hoursSpent} docID={docID} />
      <button
        onClick={() => deleteSubject(docID)}
        className=" absolute top-0 right-0 p-1 text-sm rounded-full bg-gray-400 text-white -translate-y-2 duration-200 hover:bg-red-700"
      >
        <BsTrashFill />
      </button>
    </div>
  );
};

export default Subject;
