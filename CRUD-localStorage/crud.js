const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const tab = document.querySelector(".tab");

//get input value by clicking the button +Todo
button.addEventListener("click", () => {
  let inputValue = input.value.trim();
  if (inputValue!=="") {
    add(inputValue);
  }
});
//function to add items
const add = (inputValue) =>{
 //create the localStorage and push input data into
  let localData = JSON.parse(localStorage.getItem("localData")) || [];
  localData.push(inputValue);
  //set the value of the localStorage (convert in JSON) to that localData I created😏
  localStorage.setItem("localData", JSON.stringify(localData));
  display(inputValue);
}
//function to display
const display = (inputValue) =>{
//Here i insert the localData element into the table
  if (inputValue !== "") {
    let localData = JSON.parse(localStorage.getItem("localData")) || [];
    localData.forEach((element, index) => {
      let tableau = document.createElement("table");
      tableau.innerHTML = `
          <tr>
                <td>${index}  ${element}</td>
                <td>
                  <button class="btnComplete" onClick="completeBtn(this)">Complete</button>
                  <button class="btnEdit" onClick="editBtn(${index})">Edit</button>
                  <button class="btnDelete" onClick="deleteBtn(${index})">Delete</button>
                </td>
          </tr>
      `;
      tab.appendChild(tableau);
      input.value = "";
    });
  }
};
display();
//complete function
const completeBtn = (button) => {
  const mark = button.parentElement.parentElement;
  mark.classList.toggle("completed");
};

//delete function
const deleteBtn = (button) => {
  const del = button.parentElement.parentElement;
  del.remove();
};

//edit function
const editBtn = (button) => {};
