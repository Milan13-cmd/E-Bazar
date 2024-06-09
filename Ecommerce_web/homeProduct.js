
import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate")


export const showProduct = (product) => {
    if(!product){
        return false;
    }

    product.forEach((curElem) => {
     const { category, description, id, image, name, price, stock} = curElem;

       const productClone = document.importNode(productTemplate.content, true);
        
       productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
       productClone.querySelector('.productName').textContent = name;
       productClone.querySelector(".productDescription").textContent = description;
       productClone.querySelector('.productImage').src = image;
       productClone.querySelector(".productStock").textContent= stock;
       productClone.querySelector(".category").textContent = category;
       productClone.querySelector(".productPrice").textContent = `Nrs${price}`;

       productClone
       .querySelector(".stockElement")
       .addEventListener("click", (event) => {
         homeQuantityToggle(event, id, stock);
       });

       productClone
       .querySelector('.add-to-cart')
       .addEventListener("click", (event) => {
        addToCart(event,id, stock)
       });

       productContainer.append(productClone)
    })



}