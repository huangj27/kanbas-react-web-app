import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import './dashboard.css';

function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
            onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} className="btn btn-success" >
        Add
      </button>
      <button onClick={updateCourse} className="btn btn-primary">
        Update
      </button>
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card list-group-item">
            <button className="btn btn-warning"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

            <button className="btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

            {course.name}
          </Link>
        ))}
      </div>
  );
}
export default Dashboard;