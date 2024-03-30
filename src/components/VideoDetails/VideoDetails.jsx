import Comment from "../../components/Comment/Comment";
import Form from "../../components/Form/Form";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import Stat from "../Stat/Stat";
import "./VideoDetails.scss";

const VideoDetails = ({ videoObj }) => {
  const { title, channel, timestamp, views, likes, description, comments } =
    videoObj;
  return (
    <div className="video-details">
      <h1>{title}</h1>
      <div className="video-details__subheader">
        <h2 className="video-details__channel">{channel}</h2>
        <p className="video-details__date ">
          {new Date(timestamp).toLocaleDateString()}
        </p>
        <Stat iconUrl={viewsIcon} name={views} />
        <p className="video-details__date video-details__date--second">
          {new Date(timestamp).toLocaleDateString()}
        </p>
        <Stat iconUrl={likesIcon} name={likes} />
      </div>
      <p className="video-details__description">{description}</p>

      <h3>{comments.length} Comments</h3>
      <Form />
      {comments.map((commentObj) => (
        <Comment key={commentObj.id} commentObj={commentObj} />
      ))}
    </div>
  );
};

export default VideoDetails;
