import React from "react";

const MappedVideo = ({ video }) => {
  return (
    <div>
      <div>Mapped Video</div>
      <p>{video.name}</p>
    </div>
  );
};

export default MappedVideo;
