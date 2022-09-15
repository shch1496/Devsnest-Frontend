const dynamicContent = document.getElementById("dynamic-text");

console.log(dynamicContent)

const phrases = ["Software Engineer...", "Mentor...", "Human Being..."];
let phraseIdx = 0;

let letterIdx = 0;
const typingSpeed = 150;
const erasingSpeed = 75;
function printLetters(phrase){


    if(letterIdx === phrase.length){
        // clear the letters which have been typed
        clearLetters();
    }
   
    else if(letterIdx < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIdx);
        letterIdx +=1
     
         setTimeout(function(){
            printLetters(phrase)
         }, typingSpeed)
    }
  
}


function clearLetters() {

   if(letterIdx === -1){
    phraseIdx = (phraseIdx+1) % phrases.length;
    letterIdx = 0;
    printLetters(phrases[phraseIdx])
   
   }
   else if (letterIdx > -1){
      let updatedPhrase = "";
      for(let index =0; index < letterIdx; index++){
        updatedPhrase += phrases[phraseIdx].charAt(index);

      }
      console.log(updatedPhrase)
      dynamicContent.textContent = updatedPhrase;
      letterIdx -=1;
      setTimeout(clearLetters, erasingSpeed)
   }
}

printLetters(phrases[0])