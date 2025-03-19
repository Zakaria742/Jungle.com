let mainTitle = document.getElementById("main-title");
let title = document.getElementById("title-card");
let span = document.getElementsByTagName("span");
let cursor = document.getElementById("cursor");
let body = document.getElementById("body-main");
let innerCircle = document.getElementById("inner_circle");
let offset = 10;
let targetX = 0, targetY = 0;


function lerp(start, end, time) {
	return start + (end - start) * time;
}

function right() {
	title.style = "text-shadow: 0.5vw -.1px 0px black;";
}

function left() {
	title.style = "text-shadow: -0.5vw -.1px 0px black;";
}

function def() {
	title.style = "text-shadow: 0px 0px 0px black;";
}

function show() {

	body.style.opacity = "0";
body.style.translate = "0rem -50vw";
	setTimeout(() => {
		body.style.opacity = "100%";
		body.style.translate = "unset";
	}, 10);

	setTimeout(() => {
		mainTitle.style.translate = "25vw 0px";
		mainTitle.style.opacity = "1";
	}, 2000)

}
if (!sessionStorage.getItem("show")) {

		sessionStorage.setItem("show", true);
		show();
}

function winEvent() {
	mainTitle.style.opacity = "1";
	if (window.innerWidth > 1026) {
		mainTitle.style.translate = "25vw 0px";
	}
	else {

		mainTitle.style.translate = `0px`;
	}

	requestAnimationFrame(winEvent)

}
if (mainTitle) {
	winEvent();
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

	cursor.style.top = `${targetY - offset}px`;
	cursor.style.left = `${targetX - offset}px`;

	document.querySelectorAll('button, a, input, .stars').forEach(elements => {
		elements.onmouseenter = () => {
			cursor.style.backgroundColor = "var(--main-color-transparent)";
			cursor.style.border = "solid 1px black";
			innerCircle.scale = "2";
			innerCircle.style.border = "solid 1px var(--second-color)";
		}
		elements.onmouseleave = () => {
			cursor.style.backgroundColor = "var(--main-color)";
			cursor.style.border = "none";
			innerCircle.scale = "1";
			innerCircle.style.backgroundColor = "rgb(0, 0, 0, 0)";
			innerCircle.style.border = "solid 1px var(--main-color)";
		}
	})

	requestAnimationFrame(update);
}
update();


function update2() {
	const currentTop = parseFloat(innerCircle.style.top) || 0;
	const currentLeft = parseFloat(innerCircle.style.left) || 0;

	const newTop = lerp(currentTop, targetY - offset * 3, .2);
	const newLeft = lerp(currentLeft, targetX - offset * 3, .2);

	innerCircle.style.top = `${newTop}px`;
	innerCircle.style.left = `${newLeft}px`;


	requestAnimationFrame(update2);
}
update2();

function cursorClick() {

	document.addEventListener("mouseup", () => {

		cursor.style.scale = "1";
		cursor.style.backgroundColor = "var(--main-color)";
		innerCircle.style.borderColor = "var(--main-color)";

	})

	document.addEventListener("mousedown", () => {
		cursor.style.scale = "0.3";
		cursor.style.backgroundColor = "var(--second-color)";
		innerCircle.style.borderColor = "var(--second-color)";
	})
}
cursorClick();
requestAnimationFrame(cursorClick);



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






//Pop up


let element = document.getElementById("products")
let picture = element.querySelectorAll("#pop-title>img")
let pop = document.getElementById("popup")
let description = document.getElementById("desc")

let popTitle = document.querySelectorAll("#pop-title");

function lerp(start, finish, time) {
	return start + (finish - start) * time;
}


popTitle.forEach(element => {
	let img = element.querySelector("img");

	element.onmouseover = () => {
		let title = element.querySelector("h1");
		pop.querySelector("h1").innerText = title.innerText;
		pop.querySelector("img").setAttribute("src", img.currentSrc)
		pop.style.scale = "0.8";
	}
	element.onmouseout = () => {
		pop.style.scale = "0";

	}
	document.addEventListener("mousemove", function (event) {
		pop.style.left = `${targetX - 200}px`;
		pop.style.top = `${targetY - 300}px`;
	})
})


