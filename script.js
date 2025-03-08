let title = document.getElementById("title-card");
let span = document.getElementsByTagName("span");
let cursor = document.getElementById("cursor");
let body = document.getElementById("body-main");
let innerCircle = document.getElementById("inner_circle");
let offsetX = 10;
let offsetY = 10;
document.addEventListener("mousemove", function (event) {

	//console.log('Mouse X : ', event.clientX, 'Mouse Y : ', event.clientY);
	cursor.style.top = `${event.clientY - offsetX}px`;
	cursor.style.left = `${event.clientX - offsetY}px`;
})

document.addEventListener("mousedown", () => {
	console.log("mouse is down !");
	cursor.style.width = "20px";
	cursor.style.height = "20px";
	innerCircle.style.width = "55px";
	innerCircle.style.width = "55px";
})

document.addEventListener("mouseup", () => {
	console.log("mouse is up");
	cursor.style.width = "15px";
	cursor.style.height = "15px";
	innerCircle.style.width = "50px";
	innerCircle.style.width = "50px";
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

function show() {
	body.style.opacity = "0%";
	body.style.bottom = "50rem";
	setTimeout(() => {
		body.style.opacity = "100%";
		body.style.bottom = "0";
	}, 10);
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


const stars = document.querySelectorAll(".stars input");
const submit = document.querySelector("button");
const text = document.querySelector("textarea");

stars.forEach((star) => {
	star.addEventListener("change", function () {
		const rating = this.value;

		stars.forEach((star) => {
			const label = document.querySelector(`label[for="${star.id}"]`);
			label.style.color = star.value <= rating ? "gold" : "gray";
		});
	});
});

function clearTextrea() {
	document.getElementById("description").value = "";
}

submit.addEventListener("click", () => {
	alert(text.value);
});
