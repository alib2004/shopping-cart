let items = [
  {
    id: 1,
    name: "Apple",
    price: 1.5,
    image: "./apple.jpg",
    quantity: 1,
    totalprice: 1.5,
  },
  {
    id: 2,
    name: "Banana",
    price: 0.8,
    image: "./banana.jpg",
    quantity: 1,
    totalprice: 0.8,
  },
  {
    id: 3,
    name: "Orange",
    price: 1.2,
    image: "./orange.jpg",
    quantity: 1,
    totalprice: 1.2,
  },
  {
    id: 4,
    name: "Grapes",
    price: 2.5,
    image: "./grapes.jpg",
    quantity: 1,
    totalprice: 2.5,
  },
];
let cartBasket = [];
let grid = document.querySelector(".grid");
let buys = document.querySelector(".buys");
let totalprice = document.querySelector("h3");
items.forEach((item) => {
  grid.insertAdjacentHTML(
    "beforeend",
    `<div class="col"><h2>${item.name}</h2><img src=${item.image}><div class="price-btn"><span>${item.price}$</span><button class="add-to-cart" onclick="addproducttobasket(${item.id});">add to cart</button></div></div>`
  );
});
function addproducttobasket(id) {
  let userselect = items.find((prod) => prod.id == id);
  cartBasket.push(userselect);
  basketproductgenerator(cartBasket);
  calctotalprice(cartBasket);
}
function basketproductgenerator(basket) {
  buys.innerHTML = "";

  basket.forEach((item) => {
    let items = document.createElement("div");
    items.classList.add("item");

    let h2 = document.createElement("h2");
    h2.innerHTML = item.name;

    let p = document.createElement("p");
    p.innerHTML = item.totalprice;

    let btns = document.createElement("div");
    btns.classList.add("btns");

    let input = document.createElement("input");
    input.type = "text";
    input.value = item.quantity;
    input.max = 3;
    input.addEventListener("change", (e) => {
      updateprodcount(item.id, e.target.value);
    });

    let button = document.createElement("button");
    button.classList.add("remove");
    button.innerHTML = "remove";
    button.addEventListener("click", () => {
      removefromcart(item.id);
    });

    btns.append(input, button);
    items.append(h2, p, btns);
    buys.append(items);
  });
}
function removefromcart(id) {
  cartBasket = cartBasket.filter((item) => item.id !== id);
  basketproductgenerator(cartBasket);
  calctotalprice(cartBasket);
}
function calctotalprice(total) {
  let sum = 0;
  total.forEach((item) => {
    sum += item.price * item.quantity;
  });
  totalprice.innerHTML = `total price is ${sum}`;
}
function updateprodcount(prodid, newcount) {
  cartBasket.forEach((item) => {
    if (item.id == prodid) {
      item.quantity = newcount;
    }
  });
  calctotalprice(cartBasket);
}
