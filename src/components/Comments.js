import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import SearchUserComments from "./SearchUserComments";

function Comments({ video }) {
  const [commentLikes, setCommentLikes] = useState(0);
  const [commentDislikes, setCommentDislikes] = useState(0);
  const [shownComments, setShownComments] = useState(video.comments.map((item) => (
    <>
    <p key={uuid()}>
      <strong>{item.user}</strong>
    </p>
    <p key={uuid()}>{item.comment}</p>
    <button key={uuid()} onClick={(e) => handleCommentLike(e)}>
      {commentLikes} 👍
    </button>
    <button key={uuid()} onClick={(e) => handleCommentDislike(e)}>
      {commentDislikes} 👎
    </button>
  </>
)))

  const comments = video.comments;
  console.log("comments: ", comments);

  const users = comments.map((comment) => comment.user);
  console.log("users: ", users);

  const handleCommentLike = (e) => {
    setCommentLikes(commentLikes + 1);
  };

  const handleCommentDislike = (e) => {
    setCommentDislikes(commentDislikes - 1);
  };

  const handleSearch = (e) => {
    console.log("typed value: ", e.target.value);
    const filteredComments = users.filter((comment) => {
      console.log(comment.user);
      return comment.toLowerCase().includes(e.target.value.toLowerCase())
        ? comment
        : null;
    });
    console.log("filtered comments: ", filteredComments);
    setShownComments(filteredComments)
  };

  return (
    <div>
      <hr></hr>
      {/* <SearchUserComments /> */}
      <form>
        <input
          placeholder="search comments..."
          onChange={(e) => handleSearch(e)}
        ></input>
      </form>

      <h2>{comments.length} Comments</h2>
      {/* {commentsSection} */}
      {shownComments}
    </div>
  );
}

export default Comments;




//   const commentsSection = comments.map((item) => (
//     <>
//       <p key={uuid()}>
//         <strong>{item.user}</strong>
//       </p>
//       <p key={uuid()}>{item.comment}</p>
//       <button key={uuid()} onClick={(e) => handleCommentLike(e)}>
//         {commentLikes} 👍
//       </button>
//       <button key={uuid()} onClick={(e) => handleCommentDislike(e)}>
//         {commentDislikes} 👎
//       </button>
//     </>
//   ));
  //const [shownComments, setShownComments] = useState(commentsSection)
  ////setShownComments(commentsSection)

  //console.log("comment section: ", commentsSection);