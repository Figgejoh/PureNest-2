const amountSpan = document.querySelector(".amount");
const minusAmount = document.querySelectorAll(".minus");
const plusAmount = document.querySelectorAll(".plus");
const addToCartBtn = document.querySelectorAll(".add-to-cart");
const cartAmount = document.querySelector(".cart-amount");
const icon = document.querySelectorAll(".fa-cart-shopping");

const shopNow = document.querySelector(".shop-now");
const products = document.querySelector(".products");

cartAmount.innerText = 0;
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

plusAmount.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const amountSpan = e.target
      .closest(".btn-container")
      .querySelector(".amount");

    if (!amountSpan) {
      console.error("Amount not found");
    }

    let currentAmount = parseInt(amountSpan.innerText) || 0;

    if (isNaN(currentAmount)) {
      console.error("invalid number detected, resetting to 0");
      currentAmount = 0;
    }
    currentAmount++;
    amountSpan.innerText = currentAmount;

    console.log(`New amount: ${currentAmount}`);
  });
});

minusAmount.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const amountSpan = e.target
      .closest(".btn-container")
      .querySelector(".amount");

    if (!amountSpan) {
      console.error("Amount not found");
      return;
    }

    let currentAmount = parseInt(amountSpan.innerText) || 0;
    if (currentAmount > 0) {
      currentAmount--;
    }
    amountSpan.innerText = currentAmount;
  });
});

shopNow.addEventListener("click", () => {
  document.querySelector(".section-two").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

products.addEventListener("click", () => {
  document.querySelector(".section-two").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".hidden").forEach((section) => {
  observer.observe(section);
});
