const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const tab = document.querySelector(".tab");
//get input value by clicking the button +Todo
button.addEventListener("click", () => {
  let inputValue = input.value.trim();
  if (inputValue !== "") {
    let tableau = document.createElement("table");
    tableau.innerHTML = `
    <tr>
          <td>${inputValue}</td>
          <td>
            <button class="btnComplete" onClick="completeBtn(this)">Complete</button>
            <button class="btnEdit" onClick="editBtn(this)">Edit</button>
            <button class="btnDelete" onClick="deleteBtn(this)">Delete</button>
          </td>
    </tr>
 `;
 tab.appendChild(tableau);
 input.value = "";
  }
});

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
const editBtn = (button) => {

};
