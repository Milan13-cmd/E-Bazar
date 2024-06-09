import { updateCartValue } from "./updateCartValue";

export const  getCartProductLS = () => {
  let cartProducts = localStorage.getItem('cartProductLS')
  if(!cartProducts) return [];
  
  cartProducts = JSON.parse(cartProducts);
  updateCartValue(cartProducts);
  return cartProducts;
}