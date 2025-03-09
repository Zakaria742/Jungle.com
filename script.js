let title = document.getElementById("title-card");
let span = document.getElementsByTagName("span");
let cursor = document.getElementById("cursor");
let body = document.getElementById("body-main");
let innerCircle = document.getElementById("inner_circle");
let offset = 33;
let targetX = 0, targetY = 0;

function lerp(start, end, time) {
	return start + (end - start) * time;
}

document.addEventListener("mousemove", function (event) {

	//console.log('Mouse X : ', event.clientX, 'Mouse Y : ', event.clientY);
	targetX = event.clientX;
	targetY = event.clientY;

	//console.log("MouseX : ", cursor.style.left, "Mouse Y : ", cursor.style.top);

})
function update() {
	const currentTop = parseFloat(cursor.style.top) || 0;
	const currentLeft = parseFloat(cursor.style.left) || 0;

	const newTop = lerp(currentTop, targetY - offset, .2);
	const newLeft = lerp(currentLeft, targetX - offset, .2);

	cursor.style.top = `${newTop}px`;
	cursor.style.left = `${newLeft}px`;


	requestAnimationFrame(update);
}
update();

function cursorClick() {

	let hov = getHovered();

	document.addEventListener("mouseup", () => {

		cursor.style.scale = "0.3";
		cursor.style.backgroundColor = "var(--main-color)";
		innerCircle.style.borderColor = "var(--main-color)";

	})

	document.addEventListener("mousedown", () => {
		cursor.style.scale = "0.33";
		cursor.style.backgroundColor = "var(--second-color)";
		innerCircle.style.borderColor = "var(--second-color)";
	})

	requestAnimationFrame(cursorClick());
}
cursorClick();


function show() {
	body.style.opacity = "0%";
	body.style.bottom = "50rem";
	setTimeout(() => {
		body.style.opacity = "100%";
		body.style.bottom = "0";
	}, 10);
}

if (!sessionStorage.getItem("show")) {
	show();
	sessionStorage.setItem("show", true);
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



function right() {
	title.style = "text-shadow: 0.5vw -.1px 0px black;";
}

function left() {
	title.style = "text-shadow: -0.5vw -.1px 0px black;";
}

function def() {
	title.style = "text-shadow: 0px 0px 0px black;";
}


