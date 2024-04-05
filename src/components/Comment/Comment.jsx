import "./Comment.scss";
import Avatar from "../Avatar/Avatar";
import deleteIcon from "../../assets/icons/delete_comment.svg";

const Comment = ({ commentObj, handleClick }) => {
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
        <img
          className="comment__delete"
          alt="delete icon"
          src={deleteIcon}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Comment;
