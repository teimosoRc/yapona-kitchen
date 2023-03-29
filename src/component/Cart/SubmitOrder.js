import React, { useRef, useState } from "react";

import style from "./SubmitOrder.module.css";

const isInputValid = (inputValue) => inputValue.trim() !== "";

function SubmitOrder(props) {
  const [formValidity, setFormValidity] = useState({
    name: true,
    adress: true,
  });

  const nameRef = useRef();
  const adressRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const adress = adressRef.current.value;

    const isValidName = isInputValid(name);
    const isValidAdress = isInputValid(adress);
    const formValid = isValidName && isValidAdress;

    setFormValidity({ name: isValidName, adress: isValidAdress });

    if (!formValid) {
      return;
    }

    props.onSubmit({
      name,
      adress,
    });
  };

  return (
    <form onSubmit={confirmOrderHandler} className={style.form}>
      <div className={style.control}>
        <label htmlFor="name">Имя</label>
        <input ref={nameRef} type="text" id="name" />
        {!formValidity.name && (
          <p style={{ color: "red", fontStyle: "italic" }}>введите имя</p>
        )}
      </div>
      <div className={style.control}>
        <label htmlFor="adress">Адресс</label>
        <input ref={adressRef} type="text" id="adress" />
        {!formValidity.adress && (
          <p style={{ color: "red", fontStyle: "italic" }}>введите адресс</p>
        )}
      </div>
      <div className={style.actions}>
        <button className={style.submit} type="submit">
          Подтвердите заказ
        </button>
        <button type="button" onClick={props.onCancel}>
          Отменить
        </button>
      </div>
    </form>
  );
}

export default SubmitOrder;
