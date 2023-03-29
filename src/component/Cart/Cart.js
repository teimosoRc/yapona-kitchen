import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import SubmitOrder from "./SubmitOrder";

function Cart(props) {
  const [isSubmitOrderAvaible, setIsSubmitOrderAvaible] = useState(false);

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

  const orderHandler = () => {
    setIsSubmitOrderAvaible(true);
  };

  const buttonHiden = (
    <div className={style.actions}>
      <button className={style["button--alt"]} onClick={props.onHide}>
        Закрыть
      </button>
      {hasItem && (
        <button className={style.button} onClick={orderHandler}>
          Оформить
        </button>
      )}
    </div>
  );

  const SubmitOrderHandler = (orderData) => {
    fetch("https://yapona-kitchen-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: orderData,
        order: cartContext.items,
      }),
    });
  };

  return (
    <Modal onHide={props.onHide}>
      <ul className={style["cart-items"]}>{cartItem}</ul>
      <div className={style.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitOrderAvaible && (
        <SubmitOrder onSubmit={SubmitOrderHandler} onCancel={props.onHide} />
      )}
      {!isSubmitOrderAvaible && buttonHiden}
    </Modal>
  );
}

export default Cart;
