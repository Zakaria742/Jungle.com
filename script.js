let title = document.getElementById("title-card");
<<<<<<< HEAD
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
=======
let span = document.getElementsByTagName("span");

function right() {
	title.style = "text-shadow: 1vw 0px 0px black;";
}

function left() {
	title.style = "text-shadow: -1vw 0px 0px black;";
}

function def() {
	title.style = "text-shadow: 0px 0px 0px black;";
}

let dropdown = document.querySelector("#dropdown");
let dropBtns = document.querySelector(".dropdown-btns");

function changeDropIcon() {
	if (dropdown.checked) {
		dropBtns.innerHTML = `<svg class="dropdown-btn" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>`;
	} else {
		dropBtns.innerHTML = `<svg class="dropdown-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>`;
	}
}
>>>>>>> 4659ddc01e7ae8df205d89c27d61bbb978863e0b
