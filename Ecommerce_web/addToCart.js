import {getCartProductLS} from './getCartProducts'
import { updateCartValue } from './updateCartValue'
getCartProductLS()
export const addToCart = (event, id, stock) => {

  let addLocalStorage = getCartProductLS()

  const currentProduct = document.querySelector(`#card${id}`)

  let price = currentProduct.querySelector('.productPrice').innerText
  let quantity = currentProduct.querySelector('.productQuantity').innerText;

  price = price.replace('Nrs', '')


  price = price * quantity;
  quantity = Number(quantity)

  let existingProd = addLocalStorage.find(product => product.id === id);

  if (existingProd) {
    // Update existing product quantity and price
    existingProd.quantity += Number(quantity);
    existingProd.price += Number(price);
  } else {
    // Add new product to the local storage array
    addLocalStorage.push({ id, quantity, price });
  }


  // addLocalStorage.push({id, quantity, price})
  localStorage.setItem('cartProductLS', JSON.stringify(addLocalStorage))

  
 // update the cart button value
   updateCartValue(addLocalStorage);
  
}