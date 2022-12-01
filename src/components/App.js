import video from "../data/video.js";
import VideoContainer from "./VideoContainer.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <VideoContainer video={video} />
    </div>
  );
}

export default App;
