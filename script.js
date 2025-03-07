let title = document.getElementById("title-card");
let span = document.getElementsByTagName("span");
let cursor = document.getElementById("cursor");

let offsetX = 0;
let offsetY = 0;
document.addEventListener("mousemove", function (event) {

	//console.log('Mouse X : ', event.clientX, 'Mouse Y : ', event.clientY);
	setTimeout(() => {
		cursor.style.top = `${event.clientY - 10}px`;
		cursor.style.left = `${event.clientX - 10}px`;
	}, 90)

})

function right() {
	title.style = "text-shadow: 1vw -.1px 0px black;";
}

function left() {
	title.style = "text-shadow: -1vw -.1px 0px black;";
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
