// import { createContext, useState } from "react";

// const ProductContext = createContext({
//   data: [],
//   totalBasket: 0,
//   addToBasket: () => {},
//   removeFromBasket: () => {},
//   itemInBasket: () => {},
// });

// export function ProductContextProvider(props) {
//   const [data, setData] = useState([]);

//   function addToBasketHandler(product) {
//     setData((prevData) => {
//       return [...prevData, product];
//     });
//   }

//   function removeFromBasketHandler(productId) {
//     setData((prevData) => {
//       return prevData.filter((item) => item.id !== productId);
//     });
//   }

//   function itemInBasketHandler(productId) {
//     return data.some((item) => item.id === productId);
//   }

//   const context = {
//     data: data,
//     totalBasket: data.length,
//     addToBasket: addToBasketHandler,
//     removeFromBasket: removeFromBasketHandler,
//     itemInBasket: itemInBasketHandler,
//   };

//   return (
//     <ProductContext.Provider value={context}>
//       {props.children}
//     </ProductContext.Provider>
//   );
// }

// export default ProductContext;
