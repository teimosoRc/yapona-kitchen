import React, { useRef, useState } from "react";
import style from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (inputAmount.trim().lenght === 0 || +inputAmount < 1) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Кол-во"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Кол-во не выбрано</p>}
    </form>
  );
}

export default MealItemForm;
