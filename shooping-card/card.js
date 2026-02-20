const productName = document.querySelector(".productName");
const productPrice = document.querySelector(".productPrice");
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
  let name = productName.value.trim();
  let price = productPrice.value.trim();
  add(name, price);
  productName.value = "";
  productPrice.value = "";
});
//function to add to the card
const add = (name, price) => {
  let localData = JSON.parse(localStorage.getItem("localData")) || [];
  localData.push(productName.value);
  localData.push(productPrice.value);
  localStorage.setItem("localData", JSON.stringify(localData));
  display(name, price);
};
//function to display
const display = (name, price) => {
  const list = document.querySelector(".list");
  let total = document.querySelector(".total");
  list.innerHTML = "";
  const localData = JSON.parse(localStorage.getItem("localData")) || [];
  // console.log(localData);
  localData.forEach((name, index) => {
    let item = document.createElement("li");
    item.innerHTML = `
    <p>${name} ${price}</p>
    <button onClick='removeTask(${index})'>Remove</button>
    `;
    list.appendChild(item);
});
};
//function for removing tasks
    const removeTask = (index) => {
      let localData = JSON.parse(localStorage.getItem("localData")) || [];
      localData.splice(index, 1);
      localStorage.setItem("localData", JSON.stringify(localData));
      display();
    };
display();
