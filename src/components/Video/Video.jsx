import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import Stat from "../Stat/Stat";
import "./Video.scss";

const Video = ({ posterUrl }) => {
  return (
    <section className="video">
      <div className="video__wrapper">
        <video className="video__player" controls poster={posterUrl} src="">
          video
        </video>
        <h1>title</h1>
        <div className="video__subheader">
          <h2 className="video__subtitle">subheader</h2>
          <p className="video__date ">date</p>
          <Stat iconUrl={viewsIcon} name="views" />
          <p className="video__date video__date--second">date</p>
          <Stat iconUrl={likesIcon} name="likes" />
        </div>
        <p className="video__copy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste,
          cupiditate exercitationem voluptatem facilis labore ullam corporis,
          cumque quidem illum sunt voluptatum ipsam inventore soluta. Molestiae
          quisquam magni animi. Ut.
        </p>
      </div>
    </section>
  );
};

export default Video;
