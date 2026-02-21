const productName = document.querySelector(".productName");
const productPrice = document.querySelector(".productPrice");
const addBtn = document.querySelector(".addBtn");
let card = [];
let total = 0;
addBtn.addEventListener("click", () => {
  let name = productName.value.trim();
  let price = parseFloat(productPrice.value);
  add(name, price);
  productName.value = "";
  productPrice.value = "";
});
//function to add to the card
const add = (name, price) => {
  const item = document.createElement("li");
  item.innerHTML = `
  <p>${name} ${price}</p>
  <button onClick='removeTask(this)'>Remove</button>
  `;
  const list = document.querySelector(".list");
  list.appendChild(item);
  card.push({ name, price });
  const li = document.createElement("li");
  card.forEach((item, index) => {
    total += item.price;
  });
  li.innerHTML = `${total}`;
  const t = document.querySelector(".total");
  t.appendChild(li);
};

//function for removing tasks
const removeTask = (button) => {
  const itemRemove = button.parentElement.parentElement;
  itemRemove.remove();
};
