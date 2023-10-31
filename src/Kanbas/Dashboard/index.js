import { Link } from "react-router-dom";
import db from "../Database";
import './dashboard.css';

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="list-card">
        <div class="card">
        <img src="../../images/boston.jpg"
            class="card-img-top" alt="..."></img>
        <div class="card-body">
        <h5 class="card-title">CS4550 Web Dev</h5>
        <p class="card-text">
            <span class="course-title">CS4550.12641.202410</span>
        </p>
        <p class="card-text">
            <span class="course-term">Fall 2023 Semester Full Term</span>
        </p>
        <a href="../assignments/index.html" class="btn">
            <i class="far fa-edit" style={{"color": "grey"}}></i>
        </a>
    </div>
    </div>
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card">
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;