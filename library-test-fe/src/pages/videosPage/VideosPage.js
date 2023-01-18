import { useEffect, useState, useContext } from "react";
import UserContext from "../../components/context/UserContext";
import { useNavigate } from "react-router";

import "./videoPage.css";
import MappedVideo from "../../components/mappedVideo/MappedVideo";

const VideosPage = () => {
  const { videos, setVideos, video, setVideo } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllVideos() {
      const res = await fetch("http://localhost/video");

      const data = await res.json();

      await setVideos(data);
    }
    getAllVideos();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].id.toString() === e.target.id) {
        setVideo(videos[i]);
      }
    }

    navigate("/video");
  };

  return (
    <div>
      <div>
        {videos.map((video, key) => (
          <p
            onClick={(e) => handleClick(e)}
            key={video.id}
            id={video.id}
            className="para-vid-name"
          >
            {video.name}
          </p>
          //   <MappedVideo
          //     key={video.id}
          //     video={video}
          //     onClick={(e) => handleClick(e)}
          //   />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
