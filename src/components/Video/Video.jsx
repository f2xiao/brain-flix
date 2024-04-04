import "./Video.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api";

const Video = ({ currentVideoId }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  console.log("Video to load: ", currentVideoId);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/videos/${currentVideoId}?api_key=${API_KEY}`
        );
        setCurrentVideo(response.data);
      } catch (error) {
        console.log("can't get video details data");
      }
    };

    fetchVideoDetails();
  }, [currentVideoId]);

  if (!currentVideo) {
    return <p>... Loading video player ...</p>;
  }

  return (
    <section className="video">
      <div className="video__wrapper">
        <div className="video__container">
          <video
            className="video__player"
            controls
            poster={currentVideo.image}
            src={currentVideo.video}
          >
            video
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
