import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../components/context/UserContext";
import "./coursesPage.css";

const CoursesPage = () => {
  const { courses, setCourses, selectedCourse, setSelectedCourse } =
    useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllCourses() {
      const res = await fetch("http://localhost/course");
      const data = await res.json();
      console.log("data on courses page", data);
      setCourses(data);
    }
    getAllCourses();
  }, []);

  const handleClick = (e, course) => {
    e.preventDefault();
    setSelectedCourse(course);
    console.log(course);
    navigate("/course");
  };

  return (
    <div>
      <h1>Courses Page</h1>
      {courses.map((course) => (
        <>
          <p className="para-course" onClick={(e) => handleClick(e, course)}>
            {course.course_name}
          </p>
        </>
      ))}
    </div>
  );
};

export default CoursesPage;
