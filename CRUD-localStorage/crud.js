const input = document.querySelector(".input");
const button = document.querySelector(".btn");


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
  localData.push(inputValue.trim());
  //set the value of the localStorage (convert in JSON) to that localData I created😏
  localStorage.setItem("localData", JSON.stringify(localData));
  display();
}
//function to display
const display = (inputValue) =>{
//Here i insert the localData element into the table
  if (inputValue !== "") {
    let localData = JSON.parse(localStorage.getItem("localData")) || [];
    const tab = document.querySelector(".tab");
    tab.innerHTML="";
    localData.forEach((element, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${element}</td>
                <td>
                  <button class="btnComplete" onClick="completeBtn(${index})">Complete</button>
                  <button class="btnEdit" onClick="editBtn(${index})">Edit</button>
                  <button class="btnDelete" onClick="deleteBtn(${index})">Delete</button>
                </td>  
      `;
      tab.appendChild(tr);
      input.value = "";
    });
  }
};

//complete function
const completeBtn = (index) => {
  console.log(index);
  const mark = index;
  if (mark ==5){
     let localData = JSON.parse(localStorage.getItem("localData")) || [];
     localData.push({text:element, completed: true});
     localStorage.setItem("localData", JSON.stringify(localData));
     console.log(`Item "${index}" added to completed list.`);
  }else{
     let localData = JSON.parse(localStorage.getItem("localData")) || [];
     localData.push({text:index, completed: false});
     localStorage.setItem("localData", JSON.stringify(localData));
     console.log(`Item "${index}" added to completed list.`);
  }
};

//edit function
const editBtn = (index) => {

};

//delete function
const deleteBtn = (index) => {
  let localData = JSON.parse(localStorage.getItem("localData")) || [];
   localData.splice(index, 1);
   localStorage.setItem("localData", JSON.stringify(localData));
   display();
};

display();