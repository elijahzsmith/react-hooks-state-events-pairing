import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import SearchUserComments from "./SearchUserComments";
import Comment from "./Comment";

function CommentsContainer({ video }) {
  const [search, setSearch] = useState("");

  const comments = video.comments;

  const filteredComments = comments.filter((comment) => {
    return comment.user.toLowerCase().includes(search.toLowerCase());
  });

  const shownComments = filteredComments.map((item) => (
    <Comment key={uuid()} commentItem={item} />
  ));

  return (
    <div>
      <hr></hr>
      <SearchUserComments setSearch={setSearch} />
      <h2>{comments.length} Comments</h2>
      {shownComments}
    </div>
  );
}

export default CommentsContainer;
