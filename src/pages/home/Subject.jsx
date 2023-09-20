import React from "react";

const Subject = ({ subName, hoursSpent }) => {
  return (
    <div className=" h-44 w-64 rounded bg-white shadow-xl flex flex-col justify-center items-center gap-5">
      <p className="text-2xl font-medium">{subName}</p>
      <p className="text-xl font-medium">Hours Spent: {hoursSpent} Hrs</p>
    </div>
  );
};

export default Subject;
