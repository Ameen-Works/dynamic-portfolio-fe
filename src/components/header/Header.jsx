import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Me-Header.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h2>Arshath</h2>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <img src={ME} alt="me" className="me"></img>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
