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
  const [newComment, setNewComment] = useState("");
  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  // console.log("Video to load: ", currentVideoId);

  const postComment = async (event, videoId) => {
    // prevent page refresh after from submission
    event.preventDefault();
    // console.log(videoId);
    // console.log(newComment);
    // post the comment to /videos/:id/comments
    const newCommentObj = {
      name: "Fangfang",
      comment: newComment,
    };

    try {
      await axios.post(
        `${API_URL}/videos/${videoId}/comments?api_key=${API_KEY}`,
        newCommentObj
      );

      // const returnedComment = response.data;

      fetchVideoDetails();
      setNewComment("");
    } catch (error) {
      console.log("can't post comment due to: ", error);
    }
  };

  const deleteComment = async (videoId, commentId) => {
    // console.log(videoId, commentId);
    try {
      await axios.delete(
        `${API_URL}/videos/${videoId}/comments/${commentId}?api_key=${API_KEY}`
      );
      // console.log(response.data);
      fetchVideoDetails();
    } catch (error) {
      console.log("can't delete the comment", error);
    }
  };
  const fetchVideoDetails = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/videos/${currentVideoId}?api_key=${API_KEY}`
      );
      // console.log(response.data);

      setCurrentVideo(response.data);
    } catch (error) {
      console.log("can't get video details data");
    }
  };

  const likeVideo = async (videoId) => {
    // console.log(videoId);
    try {
      await axios.put(`${API_URL}/videos/${videoId}/likes?api_key=${API_KEY}`);
      fetchVideoDetails();
    } catch (error) {
      console.log(`can't like video`);
    }
  };

  useEffect(() => {
    fetchVideoDetails();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
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
        <Stat
          iconUrl={likesIcon}
          name={currentVideo.likes}
          handleClick={() => {
            likeVideo(currentVideoId);
          }}
        />
      </div>
      <p className="video-details__description">{currentVideo.description}</p>

      <h3>{currentVideo.comments.length} Comments</h3>
      <Form
        handleSubmit={(event) => {
          postComment(event, currentVideoId);
        }}
        handleChange={(e) => {
          handleChange(e);
        }}
        newComment={newComment}
      />
      {currentVideo.comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((commentObj) => (
          <Comment
            key={commentObj.id}
            commentObj={commentObj}
            handleClick={() => {
              deleteComment(currentVideoId, commentObj.id);
            }}
          />
        ))}
    </div>
  );
};

export default VideoDetails;
