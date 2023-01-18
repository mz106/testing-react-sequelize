import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../components/context/UserContext";
import "./coursePage.css";

const CoursePage = () => {
  const { selectedCourse, video, setVideo } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = (e, vid) => {
    e.preventDefault();
    setVideo(vid);
    navigate("/video");
  };
  return (
    <div>
      <h1>Course Page</h1>
      <div>{selectedCourse.course_name}</div>
      {selectedCourse.videoArr.map((vid) => (
        <div
          className="container-vid-info"
          onClick={(e) => handleClick(e, vid)}
        >
          <p>{vid.name}</p>
          <p>{vid.url}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursePage;
