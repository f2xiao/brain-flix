import "./Stat.scss";
const Stat = ({ iconUrl, name }) => {
  return (
    <div className="stat">
      <img src={iconUrl} alt={`${name} icon`} />
      <p className="stat__number">{name}</p>
    </div>
  );
};

export default Stat;
