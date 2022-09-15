const para = document.createElement("p");
para.textContent = "This is created using DOM API";
para.classList.add("one");
para.classList.add("second-class");

para.classList.remove("second-class");



para.setAttribute("id", "js-para");
console.log(para.getAttribute("id"));

const span = document.createElement("span"); // this.is a dom nodes
span.id = "span-id";
span.className = "blue red";
span.style.backgroundColor = "yellow";



para.appendChild(span);
span.innerHTML = "this is span created using <em>document.createEleemnt</em>"
document.body.appendChild(para);

const hobbies = ["Reading", "Listening to music", "Swimming"]

const list = document.createElement("ul");

for (let hobby of hobbies){
    list.innerHTML += "<li class='blue'>" + hobby + "</li>"
}

document.body.appendChild(list);


// get the elements

console.log(document.getElementById("first-para".textContent))

console.log(document.getElementsByClassName("blue"));

console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));


