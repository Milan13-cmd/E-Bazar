import { getCartProductLS } from "./getCartProducts"
import { updateCartValue } from "./updateCartValue";

export const removeProdCart = (id) => {
 let cartProducts = getCartProductLS();

 cartProducts = cartProducts.filter((currProd) => currProd.id !== id);
 console.log(cartProducts)

 // update the localstorage after removing the item
 localStorage.setItem('cartProductLS', JSON.stringify(cartProducts))

 // to remove the div onclick
 let removeDiv = document.getElementById(`card${id}`);
 if(removeDiv){
  removeDiv.remove();
 }
  
 updateCartValue(cartProducts)
}