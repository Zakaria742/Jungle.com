let title = document.getElementById("title-card");
let cursor = document.getElementById("cursor");
let body = document.getElementById("body-main");
//cursor pointer



//body background

body.addEventListener("load", () => {
    body.style.backgroundSize = "cover";
})

var mouse = new MouseEvent(Number, {screenX, screenY});
//setInterval(() => {console.log(mouse.movementX, mouse.movementY)}, 2000)
//Main title animation
function right(){
    title.style = "text-shadow: 1vw 0px 0px var(--second-color);"
}

function left(){
    title.style = "text-shadow: -1vw 0px 0px var(--second-color);"
}

function def(){
    title.style = "text-shadow: 0px 0px 0px var(--second-color);"
}