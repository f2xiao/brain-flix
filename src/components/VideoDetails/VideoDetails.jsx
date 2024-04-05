import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import Form from "../../components/Form/Form";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import Stat from "../Stat/Stat";
import "./VideoDetails.scss";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api";

const VideoDetails = ({ currentVideoId }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  // console.log("Video to load: ", currentVideoId);

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
    return <p>... Loading video details ...</p>;
  }

  return (
    <div className="video-details">
      <h1>{currentVideo.title}</h1>
      <div className="video-details__subheader">
        <h2 className="video-details__channel">By {currentVideo.channel}</h2>
        <p className="video-details__date ">
          {new Date(currentVideo.timestamp).toLocaleDateString()}
        </p>
        <Stat iconUrl={viewsIcon} name={currentVideo.views} />
        <p className="video-details__date video-details__date--second">
          {new Date(currentVideo.timestamp).toLocaleDateString()}
        </p>
        <Stat iconUrl={likesIcon} name={currentVideo.likes} />
      </div>
      <p className="video-details__description">{currentVideo.description}</p>

      <h3>{currentVideo.comments.length} Comments</h3>
      <Form />
      {currentVideo.comments.map((commentObj) => (
        <Comment key={commentObj.id} commentObj={commentObj} />
      ))}
    </div>
  );
};

export default VideoDetails;
