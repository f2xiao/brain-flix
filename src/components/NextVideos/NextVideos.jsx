import "./NextVideos.scss";
import { Link } from "react-router-dom";

const NextVideos = ({ nextVidoes }) => {
  return (
    <div className="next-videos">
      <div className="next-videos__wrapper">
        <h2 className="next-videos__title">NEXT VIDEOS</h2>
        <ul className="next-videos__list">
          {nextVidoes.map(({ id, title, channel, image }) => (
            <Link className="next-videos__link" key={id} to={`/videos/${id}`}>
              <li className="next-videos__item">
                <img className="next-videos__img" src={image} alt={title} />
                <div className="next-videos__text">
                  <p>
                    <strong>{title}</strong>
                  </p>
                  <p>{channel}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NextVideos;
