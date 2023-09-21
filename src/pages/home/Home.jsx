import React, { useContext, useEffect, useState } from "react";
import AddSubject from "./AddSubject";
import Subject from "./Subject";
import AddSubjectForm from "./AddSubjectForm";
import { DataContext } from "../../Content";
import { auth } from "../../configuration/firebase-config";
import { motion } from "framer-motion";

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
    <div className="w-full mx-auto">
      {userSubjects.length > 0 &&
        userSubjects.map((subject, idx) => (
          <motion.span
            key={idx}
            transition={{ delay: 0.3 * idx }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Subject
              subName={subject.subName}
              hoursSpent={subject.hoursSpent}
              docID={subject.id}
            />
          </motion.span>
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
