import "./Form.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import avatarUrl from "../../assets/images/Mohan-muruge.jpg";
import commentUrl from "../../assets/icons/add_comment.svg";

const Form = () => {
  return (
    <form className="form">
      <Avatar className="form__avatar" url={avatarUrl} />
      <div className="form__body">
        <div className="form__input">
          <label className="form__label">Join the conversation</label>
          <textarea
            className="form__textarea"
            type="textarea"
            placeholder="Add a new comment"
            required
          ></textarea>
        </div>
        <div className="form__button">
          <Button text="comment" iconUrl={commentUrl} />
        </div>
      </div>
    </form>
  );
};

export default Form;
