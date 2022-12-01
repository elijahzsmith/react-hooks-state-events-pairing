import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Comment({ commentItem }) {
  const [commentLikes, setCommentLikes] = useState(0);
  const [commentDislikes, setCommentDislikes] = useState(0);

  const { user, comment } = commentItem;

  const handleCommentLike = () => {
    setCommentLikes(commentLikes + 1);
  };

  const handleCommentDislike = () => {
    setCommentDislikes(commentDislikes - 1);
  };
  return (
    <>
      <p>
        <strong>{user}</strong>
      </p>
      <p key={uuid()}>{comment}</p>
      <button key={uuid()} onClick={handleCommentLike}>
        {commentLikes} 👍
      </button>
      <button key={uuid()} onClick={handleCommentDislike}>
        {commentDislikes} 👎
      </button>
    </>
  );
}

export default Comment;
