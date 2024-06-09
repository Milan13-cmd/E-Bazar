import { getCartProductLS } from "./getCartProducts"

export const fetchDataFromLS = (id, price) => {

  let cartProducts = getCartProductLS();

  let existingProducts = cartProducts.find((currProd) => currProd.id === id);
  let quantity = 1;

  if(existingProducts){
    quantity = existingProducts.quantity;
    price = existingProducts.price;
  }

  return {quantity,price}
}