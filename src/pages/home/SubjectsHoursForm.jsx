import React, { useState } from "react";

const SubjectsHoursForm = () => {
  const [hrs, setHrs] = useState("");
  return (
    <div>
      <form className="flex justify-between items-center gap-2 pt-2 border-t-2 ">
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
          className="w-9 h-9 flex items-center justify-center rounded bg-emerald-500 font-bold text-xl text-gray-100"
        >
          +
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded bg-red-500 font-bold text-xl text-gray-100">
          -
        </button>
        {/* <button className="px-3 py-1 rounded bg-gray-400 ml-2 font-bold">
          C
        </button> */}
      </form>
    </div>
  );
};

export default SubjectsHoursForm;
