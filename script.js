const buyAmount = document.querySelector(".amount");
const minusAmount = document.querySelectorAll(".minus");
const plusAmount = document.querySelectorAll(".plus");
const addToCartBtn = document.querySelectorAll(".add-to-cart");
const cartAmount = document.querySelector(".cart-amount");
const icon = document.querySelectorAll(".fa-cart-shopping");

cartAmount.innerText = 0;
let shopAmount = 0;
let shoppingCart = [];

icon.forEach((item) => {
  item.addEventListener("click", (e) => {
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;

    const product = { name, price };

    shoppingCart.push(product);
    cartAmount.innerText = shoppingCart.length;

    console.log(product);
  });
});

// function updateCart() {
//   const cartList = document.querySelector(".cart-list");
//   cartList.innerHTML = "";

//   cartAmount.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${item.name} - ${item.price}`;
//     cartList.appendChild(listItem);
//   });
// }

plusAmount.forEach((item) => {
  item.addEventListener("click", (e) => {
    buyAmount.innerText = shopAmount += 1;
  });
});

minusAmount.forEach((item) => {
  item.addEventListener("click", () => {
    buyAmount.innerText = shopAmount -= 1;

    if (buyAmount === 0) {
    }
  });
});
