import "./Video.scss";
import Comment from "../../components/Comment/Comment";
import Form from "../../components/Form/Form";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import Stat from "../Stat/Stat";

const Video = ({ videoObj }) => {
  const {
    title,
    channel,
    timestamp,
    views,
    likes,
    description,
    image,
    video,
    comments,
  } = videoObj;

  return (
    <section className="video">
      <div className="video__wrapper">
        <div className="video__container">
          <video className="video__player" controls poster={image} src={video}>
            video
          </video>
        </div>
      </div>

      <div className="video__copy">
        <h1>{title}</h1>
        <div className="video__subheader">
          <h2 className="video__channel">{channel}</h2>
          <p className="video__date ">
            {new Date(timestamp).toLocaleDateString()}
          </p>
          <Stat iconUrl={viewsIcon} name={views} />
          <p className="video__date video__date--second">
            {new Date(timestamp).toLocaleDateString()}
          </p>
          <Stat iconUrl={likesIcon} name={likes} />
        </div>
        <p className="video__description">{description}</p>
      </div>

      <div className="video__comments">
        <h3>{comments.length} Comments</h3>
        <Form />
        {comments.map((commentObj) => (
          <Comment key={commentObj.id} commentObj={commentObj} />
        ))}
      </div>
    </section>
  );
};

export default Video;
