import React from "react";

function SearchUserComments({ setSearch }) {
  return (
    <form>
      <input
        placeholder="search comments..."
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchUserComments;
