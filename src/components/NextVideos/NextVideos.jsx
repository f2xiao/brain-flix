import "./NextVideos.scss";

const NextVideos = ({ nextVidoes }) => {
  return (
    <div className="next-videos">
      <div className="next-videos__wrapper">
        <h3 className="next-videos__title">NEXT VIDEOS</h3>
        <ul className="next-videos__list">
          {nextVidoes.map(({ id, title, channel, image }) => (
            <li key={id} className="next-videos__item">
              <img className="next-videos__img" src={image} alt={title} />
              <div className="next-videos__text">
                <h3>{title}</h3>
                <p>{channel}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NextVideos;
