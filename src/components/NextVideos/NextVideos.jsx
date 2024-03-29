import "./NextVideos.scss";

const NextVideos = () => {
  return (
    <div className="next-videos">
      <h3 className="next-videos__title">NEXT VIDEOS</h3>
      <ul className="next-videos__list">
        <li className="next-videos__item">
          <img
            className="next-videos__img"
            src="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
            alt="title"
          />
          <div className="next-videos__text">
            <h3>title</h3>
            <p>channel</p>
          </div>
        </li>
        <li className="next-videos__item">
          <img
            className="next-videos__img"
            src="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
            alt="title"
          />
          <div className="next-videos__text">
            <h3>title</h3>
            <p>channel</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NextVideos;
