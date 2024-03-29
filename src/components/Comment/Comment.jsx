import "./Comment.scss";
import Avatar from "../Avatar/Avatar";

const Comment = () => {
  return (
    <div className="comment">
      <Avatar className="comment__avatar" />
      <div className="comment__body">
        <p className="comment__name">name</p>
        <p className="comment__timestamp">timestamp</p>
        <p className="comment__text">
          Your insights into the future of AI are enlightening! The intersection
          of technology and ethics is particularly thought-provoking. Keep us
          updated on the tech front!
        </p>
      </div>
    </div>
  );
};

export default Comment;
