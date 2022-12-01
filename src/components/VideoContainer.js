import React, { useState } from "react";
// import Comments from "./Comments";
import CommentToggle from "./CommentToggle";

function VideoContainer({ video, handleHideComments }) {
  const [currLikes, setCurrLikes] = useState(video.upvotes);
  const [currDislikes, setCurrDislikes] = useState(video.downvotes);

  const videoURL = video.embedUrl;
  const videoTitle = video.title;
  const views = video.views;
  const uploadDate = video.createdAt;

  const handleLike = () => {
    setCurrLikes(currLikes + 1);
  };

  const handleDislike = () => {
    setCurrDislikes(currDislikes - 1);
  };

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={videoURL}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{videoTitle}</h1>
      <p>
        {views} Views | Uploaded {uploadDate}
      </p>
      <div>
        <button onClick={handleLike}>{currLikes} 👍 </button>
        <button onClick={handleDislike}>{currDislikes} 👎 </button>
      </div>
      <br></br>
      <CommentToggle video={video} />
    </div>
  );
}

export default VideoContainer;
