import "./Video.scss";

const Video = ({ image, video }) => {
  return (
    <section className="video">
      <div className="video__wrapper">
        <div className="video__container">
          <video className="video__player" controls poster={image} src={video}>
            video
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
