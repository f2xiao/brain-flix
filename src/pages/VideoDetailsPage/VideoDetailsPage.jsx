import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../../utils/api";
import VideoDetails from "../../components/VideoDetails-sp2/VideoDetails";

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
        console.log(response.data);
        setVideosList(response.data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  if (isFetching) {
    return <p>... Loading videos data ...</p>;
  }

  const currentVideoId = videoId ? videoId : videosList[0].id;
  const nextVideos = videosList.filter((video) => video.id !== currentVideoId);

  return (
    <main>
      <div className="app__wrapper">
        <VideoDetails currentVideoId={currentVideoId} />
      </div>
    </main>
  );
};

export default VideoDetailsPage;
