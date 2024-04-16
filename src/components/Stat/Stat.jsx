import "./Stat.scss";
const Stat = ({ iconUrl, name, handleClick = null }) => {
  return (
    <div className="stat">
      <img
        className={handleClick && "stat__likes"}
        src={iconUrl}
        alt={`${name} icon`}
        onClick={handleClick}
      />
      <p className="stat__number">{name}</p>
    </div>
  );
};

export default Stat;
