import React, { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layot/Header";
import Meals from "./component/Meels/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsVis, setCartIsVis] = useState(false);

  const showCartHandler = () => {
    setCartIsVis(true);
  };

  const hideCartHandler = () => {
    setCartIsVis(false);
  };

  return (
    <CartContextProvider>
      {cartIsVis && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
