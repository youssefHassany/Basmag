import React, { useState } from "react";
import AddSubject from "./AddSubject";
import Subject from "./Subject";

const Home = () => {
  const [subjects, setSubjects] = useState([]);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto place-items-center">
      <Subject />
      <AddSubject />
    </div>
  );
};

export default Home;
