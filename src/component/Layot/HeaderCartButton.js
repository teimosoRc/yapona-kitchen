import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [buttonIsAnim, setButtonIsAnim] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const buttonClasses = `${style.button} ${buttonIsAnim ? style.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonIsAnim(true);
    const timer = setTimeout(() => {
      setButtonIsAnim(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={style.badge}>{cartItemNumber}</span>
    </button>
  );
}

export default HeaderCartButton;
