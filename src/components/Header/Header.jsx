import "./Header.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";
import logoUrl from "../../assets/logo/BrainFlix-logo.svg";
import uploadUrl from "../../assets/icons/upload.svg";
import searchUrl from "../../assets/icons/search.svg";
import avatarUrl from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__wrapper">
        <div className="site-header__logo">
          <img
            alt="brainflix logo"
            src={logoUrl}
            className="site-header__img"
          />
        </div>
        <div className="site-header__search">
          <img
            className="site-header__icon"
            src={searchUrl}
            alt="search icon"
          />
          <Input type="search" />
        </div>
        <Avatar className="site-header__avatar" url={avatarUrl} />
        <Button text="upload" iconUrl={uploadUrl} />
        <Avatar
          className="site-header__avatar site-header__avatar--second"
          url={avatarUrl}
        />
      </div>
    </header>
  );
};

export default Header;
