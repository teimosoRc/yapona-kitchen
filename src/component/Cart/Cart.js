<<<<<<< HEAD
import React, { useContext, useState } from "react";
=======
import React, { useContext } from "react";
>>>>>>> a1e14b9ad97dfb47b8240a2ee0bcd48ab0528213
import Modal from "../UI/Modal";
import style from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
<<<<<<< HEAD
import SubmitOrder from "./SubmitOrder";

function Cart(props) {
  const [isSubmitOrderAvaible, setIsSubmitOrderAvaible] = useState(false);

=======

function Cart(props) {
>>>>>>> a1e14b9ad97dfb47b8240a2ee0bcd48ab0528213
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

<<<<<<< HEAD
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

=======
>>>>>>> a1e14b9ad97dfb47b8240a2ee0bcd48ab0528213
  return (
    <Modal onHide={props.onHide}>
      <ul className={style["cart-items"]}>{cartItem}</ul>
      <div className={style.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
<<<<<<< HEAD
      {isSubmitOrderAvaible && (
        <SubmitOrder onSubmit={SubmitOrderHandler} onCancel={props.onHide} />
      )}
      {!isSubmitOrderAvaible && buttonHiden}
=======
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onHide}>
          Закрыть
        </button>
        {hasItem && <button className={style.button}>Оформить</button>}
      </div>
>>>>>>> a1e14b9ad97dfb47b8240a2ee0bcd48ab0528213
    </Modal>
  );
}

export default Cart;
