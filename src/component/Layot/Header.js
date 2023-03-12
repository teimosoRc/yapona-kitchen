import React from "react";
import style from "./Header.module.css";
import sushiImage from "../../assets/sushi.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>Japan Kitchen</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={style["main-image"]}>
        <img src={sushiImage} alt="Meels from jap kitchen" />
      </div>
    </React.Fragment>
  );
}

export default Header;
