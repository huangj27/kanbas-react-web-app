import { Link, useLocation } from "react-router-dom";
import './navigation.css';
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text" />,
    Dashboard: <RiDashboard3Line className="fs-1 text" />,
    Courses: <FaBook className="fs-1 text" />,
    Calendar: <BsCalendar2Week className="fs-1 text" />,
  };
  const { pathname } = useLocation();

  return (
    <div className="list-group kanbas-nav">   
        <img src="../../images/northeastern-logo.jpeg"></img>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`${pathname.includes(link) && "active"}`}>
            {linksToIconsMap[link]}
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;