import React, { useEffect, useState } from "react";
import AddSubject from "./AddSubject";
import Subject from "./Subject";

import { db } from "../../configuration/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import AddSubjectForm from "./AddSubjectForm";

const Home = () => {
  const subjectsDataCollectionRef = collection(db, "subjects");

  const [formIsVisible, setFormIsVisible] = useState(false); // for the adding subject form
  const [subjects, setSubjects] = useState([]);

  const getSubjectsData = async () => {
    try {
      const subData = await getDocs(subjectsDataCollectionRef);
      const filteredData = subData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSubjects(filteredData);
      // console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSubjectsData();
  }, []);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto place-items-center">
      {subjects.length > 0 &&
        subjects.map((subject, idx) => (
          <Subject
            subName={subject.subName}
            hoursSpent={subject.hoursSpent}
            key={idx}
          />
        ))}
      <AddSubject setFormIsVisible={setFormIsVisible} />
      <AddSubjectForm
        formIsVisible={formIsVisible}
        setFormIsVisible={setFormIsVisible}
      />
    </div>
  );
};

export default Home;
