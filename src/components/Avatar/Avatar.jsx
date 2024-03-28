import "./Avatar.scss";
const Avatar = ({
  url = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
  className,
}) => {
  return (
    <div className={className}>
      <img src={url} alt="profile" className="avatar"></img>
    </div>
  );
};

export default Avatar;
