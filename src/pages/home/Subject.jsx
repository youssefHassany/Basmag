import React from "react";
import SubjectsHoursForm from "./SubjectsHoursForm";

const Subject = ({ subName, hoursSpent }) => {
  return (
    <div className=" h-44 w-64 rounded-3xl bg-white shadow-xl flex flex-col justify-center items-center gap-5">
      <p className="text-2xl font-bold">{subName}</p>
      <p className="text-xl font-medium">
        Hours Spent:{" "}
        <span className="text-3xl text-indigo-500 font-bold">{hoursSpent}</span>{" "}
        Hrs
      </p>
      <SubjectsHoursForm />
    </div>
  );
};

export default Subject;
