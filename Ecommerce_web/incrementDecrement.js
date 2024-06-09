import { getCartProductLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";


export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  // console.log(currentCardElement);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  // Get the data from localStorage

  let localCartProducts = getCartProductLS();
  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  // Incerment and decrement the cart
  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  // finally we will update the price in  localstorage
  localStoragePrice = price * quantity;

  let updateCart = { id, quantity, price: localStoragePrice };
  
  updateCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updateCart : curProd;
  });

  console.log(updateCart)
  localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

  productPrice.innerText = localStoragePrice;
  productQuantity.innerText = quantity;

  updateCartProductTotal();
};
