import { useParams } from "react-router-dom";

const VideoDetailsPage = () => {
  const { videoId } = useParams();
  if (videoId) {
    return <div>VideoDetailsPage {videoId}</div>;
  } else {
    return <div>VideoDetailsPage the first item</div>;
  }
};

export default VideoDetailsPage;
