import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import videosList from "./data/videos.json";
import videosData from "./data/video-details.json";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videosData[0]);
  const [nextVideos, setNextVideos] = useState(
    videosList.filter((video) => video.id !== currentVideo.id)
  );

  const switchVideos = (id) => {
    setCurrentVideo(videosData.find((video) => video.id === id));
    setNextVideos(videosList.filter((video) => video.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <Video image={currentVideo.image} video={currentVideo.video} />
      <div className="app__wrapper">
        <VideoDetails videoObj={currentVideo} />
        <NextVideos nextVidoes={nextVideos} handleClick={switchVideos} />
      </div>
    </div>
  );
}

export default App;
