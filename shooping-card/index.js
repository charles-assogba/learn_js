const card = document.querySelector(".container");
const button = document.getElementById("add");
const input = document.getElementById("inputItem");
const list = document.querySelector(".list");
const count = document.querySelector(".count");

card.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    //const text = event.target.value.trim();
    const text = input.value.trim();
    if (text !== null) {
      addProduct(text);
      //event.target.value = "";
      input.value = "";
    }
  }
});

let counter = 0;
button.addEventListener("click", () => {
  if (input.value !== "") {
    counter++;
    count.textContent = `Count:${counter}`;
    const newItem = document.createElement("li");
    newItem.innerHTML = `
   <p>${input.value}</p>
   <div>
   <button onClick="deleteItem(this)">Delete</button>
   </div>
   `;
    list.appendChild(newItem);
    input.value = "";
  } else{
    alert("Enter something before!!!");
  }
});

const addProduct = (text) => {
  const item = document.createElement("li");
  item.className = "item";
  item.innerHTML = `
   <p>${text}</p>
   <div>
   <button onClick="deleteItem(this)">Delete</button>
   </div>
   `;
  list.appendChild(item);
};

const deleteItem = (button) => {
  const item = button.parentElement.parentElement;
  item.remove();
  counter--;
  count.textContent = `Count:${counter}`;
};
