import { getCartProductLS } from "./getCartProducts";
export const updateCartProductTotal = () => {
  let LocalcartProducts = getCartProductLS();

  let subTotal = document.querySelector('.productSubTotal')
  let FinalAmount = document.querySelector('.productFinalTotal')
  let initialValue = 0;

 let totalProductPrice = LocalcartProducts.reduce((accum,curElem ) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice
  }, initialValue)
     
  console.log(totalProductPrice)

 
  subTotal.textContent = `NRS${totalProductPrice}`;

  FinalAmount.textContent = `NRS${totalProductPrice + 100}`
  

}