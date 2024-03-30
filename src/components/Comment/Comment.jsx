import "./Comment.scss";
import Avatar from "../Avatar/Avatar";

const Comment = ({ commentObj }) => {
  const { comment, name, timestamp } = commentObj;
  return (
    <div className="comment">
      <Avatar className="comment__avatar" />
      <div className="comment__body">
        <p className="comment__name">{name}</p>
        <p className="comment__timestamp">
          {new Date(timestamp).toLocaleDateString()}
        </p>
        <p className="comment__text">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
