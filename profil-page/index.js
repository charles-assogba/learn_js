/*
const a = 2;
const b = 3;

const add = (a, b) => {
  return a + b;
};

console.log(add(a, b));

//arrow function
const bob = (a) => {
  return a + 100;
};
console.log(bob(a));
const person = {
  name: "alex",
  age: 25,
};

const adds = (d, l) => {
  return d + l;
};

console.log(adds(2, 5));

console.log("first name");
console.log("last name");

setTimeout(()=>{
    console.log("first");
},3000);
console.log("second");*/

const link = document.getElementById('text');
link. textContent = "Mozilla developer network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "we hope you enjoyed the ride.";
sect.appendChild(para);

const text = document.createTextNode(" - the premier source for web development knowledge.");

const linkPara = document.querySelector("p");
linkPara.appendChild(text);
linkPara.style.color = "red";
linkPara.style.backgroundColor = "green";
linkPara.style.padding = "10px";
const nameListener = document.querySelector(".left");
nameListener.addEventListener("click",(event)=>{
  console.log(event);
})





