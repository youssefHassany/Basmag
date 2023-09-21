import React, { useContext, useEffect, useState } from "react";
import AddSubject from "./AddSubject";
import Subject from "./Subject";
import AddSubjectForm from "./AddSubjectForm";
import { DataContext } from "../../Content";
import { auth } from "../../configuration/firebase-config";

const Home = () => {
  const { subjects } = useContext(DataContext);
  const [formIsVisible, setFormIsVisible] = useState(false); // for the adding subject form
  const [userSubjects, setUserSubjects] = useState([]);

  // this function will filter the subject so that the displayed subjects are only the user's
  const getUserSubjects = () => {
    const filteredSubjects = subjects.filter(
      (subject) => subject.userID === auth?.currentUser?.uid
    );
    setUserSubjects(filteredSubjects);
  };

  useEffect(() => {
    getUserSubjects();
  }, [subjects]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto place-items-center">
      {userSubjects.length > 0 &&
        userSubjects.map((subject, idx) => (
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
