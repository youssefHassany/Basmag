import React from "react";

const Loader = () => {
  return (
    <div className=" w-52 h-48 flex items-center justify-center">
      <div className=" w-32 h-32 rounded-full border-t-2 border-r-2 border-indigo-500 animate-spin"></div>
    </div>
  );
};

export default Loader;
