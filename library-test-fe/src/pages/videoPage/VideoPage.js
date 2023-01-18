import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../components/context/UserContext";
import "./videoPage.css";

const VideoPage = () => {
  const {
    videos,
    setVideos,
    video,
    activities,
    setActivities,
    setActivity,
    activity,
  } = useContext(UserContext);
  //   const [activities, setActivities] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function getActivities() {
      const res = await fetch(`http://localhost/activity/${video.id}`);

      const data = await res.json();

      setActivities(data);
    }
    getActivities();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].id === parseInt(e.target.id)) {
        setActivity(activities[i]);
      }
    }

    navigate("/activity");
  };

  return (
    <div>
      <div>VideoPage</div>
      {/* {videos.map((video) => (
        <p>{video.name}</p>
      ))} */}
      <p>{video.name}</p>
      <iframe
        src={`https://www.youtube.com/embed/${video.VideoID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {activities.map((activity, key) => (
        <p
          onClick={(e) => handleClick(e)}
          key={activity.id}
          id={activity.id}
          className="para-activity"
        >
          {activity.name}
        </p>
      ))}
    </div>
  );
};

export default VideoPage;
