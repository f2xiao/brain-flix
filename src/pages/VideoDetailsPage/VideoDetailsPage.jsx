import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../../utils/api";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import Video from "../../components/Video/Video";
import "./VideoDetailsPage.scss";

const VideoDetailsPage = () => {
  const { videoId } = useParams();
  const [videosList, setVideosList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/videos?api_key=${API_KEY}`
        );
        // console.log(response.data);
        setVideosList(response.data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  if (isFetching) {
    return (
      <p className="video-details-page__wrapper">... Loading videos data ...</p>
    );
  }

  const currentVideoId = videoId ? videoId : videosList[0].id;
  const nextVideos = videosList.filter((video) => video.id !== currentVideoId);

  return (
    <main>
      <Video currentVideoId={currentVideoId} />
      <div className="video-details-page__wrapper">
        <VideoDetails currentVideoId={currentVideoId} />
        <NextVideos nextVidoes={nextVideos} />
      </div>
    </main>
  );
};

export default VideoDetailsPage;
