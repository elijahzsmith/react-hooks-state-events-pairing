import React from 'react'
import Comments from './Comments'

function SearchUserComments() {


    // const handleSearch = (e) => {
    //     console.log(e.target.value);
    //     const filteredComments = users.filter(
    //       (user) => {
    //         return user.toLowerCase().includes(e.target.value.toLowerCase()) === e.target.value.toLowerCase()
    //         }
    //     );
    //     set
    //   };


  return (
    <form>
        <input
          placeholder="search comments..."
        //   onChange={(e) => handleSearch(e)}
        ></input>
      </form>
  )
}

export default SearchUserComments