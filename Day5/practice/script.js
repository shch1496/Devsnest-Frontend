const COLOR = 'rgb(128, 128, 255)'

/* code from here */
let letters = document.querySelectorAll(".letter");
window.addEventListener("keydown", function(e){

let flag = false;
    switch(e.key.toLowerCase()){
        case "d":
        case "e":
        case "v":
        case "s":
        case "n":
        case "t":
            flag = true;
            break;
        default:
            flag= false;
            break;
        
    }

    if(flag===true){
        for(let i=0; i<letters.length; i++){
            if(letters[i].textContent.toLowerCase() === e.key.toLowerCase()){
                letters[i].style.color = COLOR;
            }
        }
    }

})



