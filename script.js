const buyAmount = document.querySelector(".amount");
const minusAmount = document.querySelectorAll(".minus");
const plusAmount = document.querySelectorAll(".plus");
const amount = document.querySelector(".amount");
const addToCartBtn = document.querySelectorAll(".add-to-cart");
const cartAmount = document.querySelector(".cart-amount");

cartAmount.innerText = 0;
let shopAmount = 0;
let shoppingCart = [];

addToCartBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;

    const product = { name, price };

    shoppingCart.push(product);
    cartAmount.innerText = shoppingCart.length;

    console.log(product);
  });
});

plusAmount.forEach((item) => {
  item.addEventListener("click", (e) => {
    buyAmount.innerText = shopAmount += 1;
  });
});

minusAmount.forEach((item) => {
  item.addEventListener("click", () => {
    buyAmount.innerText = shopAmount -= 1;
  });
});
