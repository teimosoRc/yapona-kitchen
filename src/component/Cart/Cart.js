import React, { useContext } from "react";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartContext = useContext(CartContext);
  const totalAmount = `${cartContext.totalAmount.toFixed(2)}$`;
  const hasItem = cartContext.items.length > 0;

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItem = cartContext.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addCartItemHandler.bind(null, item)}
      onRemove={removeCartItemHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onHide={props.onHide}>
      <ul className={style["cart-items"]}>{cartItem}</ul>
      <div className={style.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onHide}>
          Закрыть
        </button>
        {hasItem && <button className={style.button}>Оформить</button>}
      </div>
    </Modal>
  );
}

export default Cart;
