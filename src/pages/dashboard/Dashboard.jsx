import React, { useState, useContext, useEffect } from "react";
import PieChartComponent from "../../components/charts/PieChartComponent";
import BarChartComponent from "../../components/charts/BarChartComponent";
import { DataContext } from "../../Content";
import { auth } from "../../configuration/firebase-config";
import { useSort } from "../../hooks/useSort";
import Loader from "../../components/loader/Loader";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { subjects } = useContext(DataContext);
  const [userSubjects, setUserSubjects] = useState([]);

  const [transformedData, setTransformedData] = useState([]); // charts data

  // this function will filter the subject so that the displayed subjects are only the user's
  const getUserSubjects = () => {
    const filteredSubjects = subjects.filter(
      (subject) => subject.userID === auth?.currentUser?.uid
    );
    setUserSubjects(filteredSubjects);
  };

  // in order to use piechart there must be some transformation of the data
  // we must have a name and value keys
  // so i will make a function that will transform the userSubjects state and make it have name and value keys
  const transformData = () => {
    const transformed = userSubjects.map((subject) => ({
      name: subject.subName,
      value: subject.hoursSpent,
    }));
    setTransformedData(transformed);
  };

  useEffect(() => {
    getUserSubjects();
  }, [subjects]);

  useEffect(() => {
    transformData();
  }, [userSubjects]);

  // Check if userSubjects is a non-empty array before sorting
  if (!Array.isArray(userSubjects) || userSubjects.length === 0) {
    return (
      <div className="w-full flex justify-center">
        <Loader />
      </div>
    );
  }

  const sortedUserSubjects = useSort(userSubjects);

  return (
    <>
      <h1 className="text-center text-2xl p-4">Dashboard</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-xl p-4 rounded-xl">
          <h3 className="font-medium text-xl text-center mb-8">
            Most Studied Subjects
          </h3>
          {sortedUserSubjects.map((sub, idx) => (
            <motion.p
              transition={{ delay: 0.3 * idx }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="text-2xl font-medium my-2 p-2 border-l-4 border-indigo-600 bg-gray-300"
              key={idx}
            >
              {idx + 1}. {sub.subName}: {sub.hoursSpent} Hours
            </motion.p>
          ))}
        </div>

        <div className="bg-white shadow-xl p-2 rounded-xl flex justify-center items-center flex-col">
          <h3 className="font-medium text-xl">Hours Spent Per Subject</h3>
          <PieChartComponent
            pieData={transformedData}
            pieDataKey={"value"}
          />{" "}
        </div>

        <div className="bg-white shadow-xl p-2 rounded-xl flex justify-center items-center">
          <BarChartComponent
            dataKeyOne={"subName"}
            dataKeyTwo={"hoursSpent"}
            targetData={userSubjects}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
