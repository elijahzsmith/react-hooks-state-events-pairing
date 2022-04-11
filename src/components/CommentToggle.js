import React, { useState } from "react";
import Comments from "./Comments";
import { v4 as uuid } from 'uuid'

function CommentToggle({ video }) {
  const [isShown, setIsShown] = useState(true);

  const handleHideComments = () => {
    setIsShown(!isShown);
  };

  const text = isShown ? "Hide" : "Show";

  const showComments = isShown ? <Comments key={uuid()} video={video} /> : null;

  return (
    <div>
      <button onClick={handleHideComments}>{text} Comments</button>
      {showComments}
    </div>
  );
}

export default CommentToggle;
