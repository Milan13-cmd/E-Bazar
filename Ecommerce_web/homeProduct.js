const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate")


export const showProduct = (product) => {
    if(!product){
        return false;
    }

    product.forEach((curElem) => {
     const {brand, category, description, id, image, name, price, stock} = curElem;

       const productClone = document.importNode(productTemplate.content, true);

       productClone.querySelector('.productName').textContent = name;
       productClone.querySelector(".productRating") .textContent = brand; 
       productClone.querySelector('.productImage').src = image;
       productClone.querySelector(".productStock").textContent= stock;
       productClone.querySelector(".category").textContent = category;
       productClone.querySelector(".productPrice").textContent = `Nrs ${price}`;
       productContainer.append(productClone)
    })



}