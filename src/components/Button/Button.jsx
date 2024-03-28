import "./Button.scss";

const Button = ({ text, iconUrl }) => {
  return (
    <button className="button">
      {text}
      <img className="button__icon" src={iconUrl} alt={`${text} icon`} />
    </button>
  );
};

export default Button;
