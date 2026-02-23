const productName = document.querySelector(".productName");
const productPrice = document.querySelector(".productPrice");
const addBtn = document.querySelector(".addBtn");
let card = [];

addBtn.addEventListener("click", () => {
  let name = productName.value.trim();
  let price = parseFloat(productPrice.value);
  add(name, price);
  productName.value = "";
  productPrice.value = "";
});
//function to add to the card
const add = (name, price) => {
  //Display the input name and price of the user
  const item = document.createElement("li");
  item.innerHTML = `
  <p>${name} ${price}</p>
  <button onClick='removeTask(this)'>Remove</button>
  `;
  const list = document.querySelector(".list");
  list.appendChild(item);
  //Put the items into the array card[]
  card.push({ name, price });
  //loop foreach to calculate the cumule total for all items
  let total = 0;
  card.forEach((item, index) => {
    total += item.price;
  });
  //display the total
  const totalDisplay = document.querySelector(".total");
  totalDisplay.innerHTML = `Total: $ ${total}`;
};

//function for removing tasks
const removeTask = (button) => {
  const itemRemove = button.parentElement.parentElement;
  card.forEach((item,index)=>{{
    total =- item.price;
  }});
  //display the total
  const totalDisplay = document.querySelector(".total");
  totalDisplay.innerHTML = `Total: $ ${total}`;
  itemRemove.remove();
};
