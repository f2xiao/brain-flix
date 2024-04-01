import "./NextVideos.scss";

const NextVideos = ({ nextVidoes, handleClick }) => {
  return (
    <div className="next-videos">
      <div className="next-videos__wrapper">
        <h2 className="next-videos__title">NEXT VIDEOS</h2>
        <ul className="next-videos__list">
          {nextVidoes.map(({ id, title, channel, image }) => (
            <li
              key={id}
              className="next-videos__item"
              onClick={() => {
                handleClick(id);
              }}
            >
              <img className="next-videos__img" src={image} alt={title} />
              <div className="next-videos__text">
                <p>
                  <strong>{title}</strong>
                </p>
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
