import products from './api/product.json'
import { getCartProductLS } from './getCartProducts'
import { fetchDataFromLS } from './fetchDataFromLS';
import { removeProdCart } from './removeProdCart';
import { incrementDecrement } from './incrementDecrement';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartProducts = getCartProductLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id)
  })
console.log(filterProducts)

// update addToCart page

const cardElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate')


const showCartProduct = () => {
  filterProducts.forEach((currProd) => {
    const { category, id, image, name, stock, price} = currProd;
    
    let productClone = document.importNode(templateContainer.content, true);
  
    const lSActualData = fetchDataFromLS(id,price)

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector('.category').textContent= category ;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productPrice').textContent= lSActualData.price;
    productClone.querySelector('.productQuantity').textContent = lSActualData.quantity;
    
    productClone
    .querySelector(".stockElement")
    .addEventListener("click", (event) => {
      incrementDecrement(event, id, stock,price);
    });

    productClone
    .querySelector('.remove-to-cart-button').
    addEventListener('click',() => removeProdCart(id))

    cardElement.appendChild(productClone)
  });
};

// showing the card

showCartProduct()

updateCartProductTotal();