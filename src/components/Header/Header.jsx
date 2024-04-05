import "./Header.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";
import logoUrl from "../../assets/logo/BrainFlix-logo.svg";
import uploadUrl from "../../assets/icons/upload.svg";
import searchUrl from "../../assets/icons/search.svg";
import avatarUrl from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__wrapper">
        <div className="site-header__logo">
          <Link to="/">
            <img
              alt="brainflix logo"
              src={logoUrl}
              className="site-header__img"
            />
          </Link>
        </div>
        <div className="site-header__search">
          <img
            className="site-header__icon"
            src={searchUrl}
            alt="search icon"
          />
          <Input className="site-header__input" type="search" />
        </div>
        <Avatar className="site-header__avatar" url={avatarUrl} />
        <Link className="site-header__link" to="/upload">
          <Button text="upload" iconUrl={uploadUrl} />
        </Link>
        <Avatar
          className="site-header__avatar site-header__avatar--second"
          url={avatarUrl}
        />
      </div>
    </header>
  );
};

export default Header;
