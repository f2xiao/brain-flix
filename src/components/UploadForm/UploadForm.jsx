import "./UploadForm.scss";
import videoThumbnailUrl from "../../assets/images/Upload-video-preview.jpg";
import publishUrl from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api";

const UploadForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const navigate = useNavigate();
  const handleInput = (event) => {
    setVideoTitle(event.target.value);
  };
  const handleTextarea = (event) => {
    setVideoDescription(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // submit the form data to the backend server
    const newVideo = {
      title: videoTitle,
      description: videoDescription,
      channel: "Fangfang",
      image: "https://brainflix-api-9k10.onrender.com/images/image9.jpg",
      views: "0",
      likes: "0",
      duration: "0:20",
      video:
        "https://brainflix-api-9k10.onrender.com/Attack on Titan Final Season THE FINAL CHAPTERS Special 2.mp4",
      comments: [],
    };

    try {
      const response = await axios.post(
        `${API_URL}/videos?api_key=${API_KEY}`,
        newVideo
      );
      if (response.data) {
        // console.log(response.data.id);

        setShowModal(true);
        setTimeout(() => {
          navigate(`/videos/${response.data.id}`);
        }, 3000);
      }
    } catch (error) {
      console.log("upload:", error);
    }
  };
  return (
    <>
      {showModal ? (
        <Modal message="Publish successfully, redirecting to the page of the uploaded video..." />
      ) : (
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
                value={videoTitle}
                onChange={handleInput}
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
                value={videoDescription}
                onChange={handleTextarea}
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
      )}
    </>
  );
};

export default UploadForm;
