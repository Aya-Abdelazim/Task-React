import { createContext, useState } from "react";
import Data from "../Data/Data";

const DetailsContext = createContext({
  data: [],
  addToBasket: () => {},
  removeFromBasket: () => {},
  itemInBasket: () => {},
});

export function DetailsContextProvider(props) {
  const [products, setProducts] = useState(Data);

  function addToBasketHandler(product) {
    setProducts((prevData) => {
      return [...prevData, product];
    });
  }

  function removeFromBasketHandler(productId) {
    setProducts((prevData) => {
      return prevData.filter((item) => item.id !== productId);
    });
  }

  function itemInBasketHandler(productId) {
    return products.some((item) => item.id === productId);
  }

  const context = {
    addToBasket: addToBasketHandler,
    removeFromBasket: removeFromBasketHandler,
    itemInBasket: itemInBasketHandler,
  };

  return (
    <DetailsContext.Provider value={{ products, context }}>
      {props.children}
    </DetailsContext.Provider>
  );
}

export default DetailsContext;
