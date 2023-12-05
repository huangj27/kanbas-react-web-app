import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './KanbasNavigation/navigation.css';
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  // const URL = "http://localhost:4000/api/courses";
  const URL = "https://a6server.onrender.com/api/courses"
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter((course) => course._id !== courseId));
  };

   return (
    <Provider store={store}>
     <div className="d-flex">
      <KanbasNavigation />
       <div>
       <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard 
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
       </div>
     </div>    
    </Provider>
   );
 }
 export default Kanbas;