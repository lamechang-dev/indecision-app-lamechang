import React from "react";

const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <h2 className="header__subtitile">{props.subtitle}</h2>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
