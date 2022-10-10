// Event handling and form tag

// contains information about the event
document.addEventListener("mouseover", function(event) {
    console.log(event)
})

function handleClick() {
   alert("Hello World");
}

//recommended
document.getElementById("clickme").addEventListener("click", handleClick)

