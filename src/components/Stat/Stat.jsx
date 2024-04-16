import "./Stat.scss";
const Stat = ({ className = "stat", iconUrl, name, handleClick = null }) => {
  return (
    <div className={className}>
      <img src={iconUrl} alt={`${name} icon`} onClick={handleClick} />
      <p className="stat__number">{name}</p>
    </div>
  );
};

export default Stat;
