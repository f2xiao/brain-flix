import "./UploadForm.scss";
import videoThumbnailUrl from "../../assets/images/Upload-video-preview.jpg";
import publishUrl from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";

const UploadForm = () => {
  return (
    <div className="upload">
      <h1>Upload Video</h1>
      <form className="upload__form">
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
          ></textarea>
        </div>
        <div className="upload__cta">
          <button className="upload__button">Cancel</button>
          <Button text="Publish" iconUrl={publishUrl} />
          <button className="upload__button upload__button--second">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
