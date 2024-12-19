let items = [
  {
    id: 1,
    name: "Apple",
    price: 1.5,
    image: "./apple.jpg",
    quantity: 1,
    totalprice: 1.5
  },
  {
    id: 2,
    name: "Banana",
    price: 0.8,
    image: "./banana.jpg",
    quantity: 1,
    totalprice: 0.8
  },
  {
    id: 3,
    name: "Orange",
    price: 1.2,
    image: "./orange.jpg",
    quantity: 1,
    totalprice: 1.2
  },
  {
    id: 4,
    name: "Grapes",
    price: 2.5,
    image: "./grapes.jpg",
    quantity: 1,
    totalprice: 2.5
  },
];
let cartBasket = [];
let grid = document.querySelector(".grid");
let buys = document.querySelector(".buys");
let total = document.querySelector("h3");
items.forEach((item) => {
  grid.insertAdjacentHTML(
    "beforeend",
    `
            <div class="col">
                    <h2>${item.name}</h2>
                    <img src=${item.image} alt="" width="100%">
                    <div class="price-btn">
                        <span>$${item.price}</span>
                        <div>
                            <input type="number" max="3" value="1"/>
                            <button class="add-to-cart" id=${item.id}>add to cart</button>
                        </div>
                    </div>
            </div>
        `
  );
});
grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productCard = e.target.id;
    let what = items.find((prod) => prod.id == productCard);
    userAddtoCart(what);
  }
});
const userAddtoCart = (prod) => {
  if (cartBasket.includes(prod)) {
    prod.quantity += 1;
    prod.totalprice = prod.price * prod.quantity;
  } else {
    let sum = 0
    cartBasket = []
    cartBasket.push(prod);
    cartBasket.forEach((item) => {
        sum += item.totalprice
      buys.insertAdjacentHTML(
        "beforeend",
        `
              <div class="item">
                <h2>${item.name}</h2>
                <p>$${item.totalprice}</p>
                <div class="btns">
                  <input type="number" max="3" id="" />
                  <button class="remove">remove</button>
                </div>
              </div>
          `
      );
    });
  }
  
  total.innerHTML = `total price is : ${sum}`
};
buys.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.closest(".item").remove();
  }
});
