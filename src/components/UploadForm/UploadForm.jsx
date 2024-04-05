import "./UploadForm.scss";
import videoThumbnailUrl from "../../assets/images/Upload-video-preview.jpg";
import publishUrl from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const UploadForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("Upload successfully, redirect to home page");
    navigate("/");
  };
  return (
    <div className="upload">
      <h1>Upload Video</h1>
      <form className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__thumbnail">
          <label htmlFor="" className="upload__label">
            VIDEO THUMBNAIL
          </label>
          <img
            className="upload__image"
            src={videoThumbnailUrl}
            alt="video thumbnail"
          />
        </div>
        <div className="upload__data">
          <label htmlFor="title" className="upload__label">
            TITLE YOUR VIDEO
          </label>
          <input
            placeholder="Add a title to your video"
            type="text"
            className="upload__input"
            required
          />
          <label
            htmlFor="description"
            className="upload__label"
            placeholder="Add a title to your video"
          >
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__textarea"
            placeholder="Add a description to your video"
            required
          ></textarea>
        </div>
        <div className="upload__cta">
          <Link to="/">
            <button className="upload__button">Cancel</button>
          </Link>
          <Button text="Publish" iconUrl={publishUrl} />
          <Link to="/">
            <button className="upload__button upload__button--second">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
