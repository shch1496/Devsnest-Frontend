const container = document.getElementById("container");


for(let i=0; i<4; i++){
   const div = document.createElement("div");
//
   div.style = "height: 75px; width: 75px; background-color: palevioletred;"
   div.style.margin= "20px";
   container.appendChild(div);
}