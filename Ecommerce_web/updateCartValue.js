const cartValue = document.querySelector('#cartValue');


export const updateCartValue = (cartProducts) => {
  return cartValue.innerHTML = ` <i class="ri-shopping-cart-2-fill">${cartProducts.length}</i>`
}