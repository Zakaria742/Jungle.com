let mainTitle = document.getElementById("main-title");
let span = document.getElementsByTagName("span");
let cursor = document.getElementById("cursor");
let body = document.getElementById("body-main");
let popupContainer = document.getElementById('popup-container');
let cards = document.querySelectorAll(".card");
let innerCircle = document.getElementById("inner_circle");
let offset = 10;
let targetX = 0, targetY = 0;


function lerp(start, end, time) {
	return start + (end - start) * time;
}


document.addEventListener("mousemove", function (event) {

	targetX = event.clientX;
	targetY = event.clientY;

})
function update() {

	cursor.style.top = `${targetY - offset}px`;
	cursor.style.left = `${targetX - offset}px`;

	document.querySelectorAll('button, a, input').forEach(elements => {
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

const opinion = document.getElementById("opinion");
const clearBtn = document.getElementById("btnClear");
const submitBtn = document.getElementById("btnSubmit");
//footer
function clear(){
	opinion.value = "";
}
clearBtn.addEventListener("click", clear);
submitBtn.addEventListener("click", () =>{
	alert(`Opintion submitted : ${opinion.value}`);
});

//Pop up


let element = document.getElementById("products")
let picture = document.querySelectorAll("#pop-title>img")
let pop = document.getElementById("popup")
let description = document.getElementById("desc")

let popTitle = document.querySelectorAll("#pop-title");

async function fetchProduct() {
	try {
		const product = await fetch("./products.json");
		const response = product.json();

		return response;
	}
	catch (error) {
		console.error(error);
	}
};

function activatePopUp() {
	popTitle.forEach(element => {
		let img = element.querySelector("img");

		element.onmouseover = () => {
			let title = element.querySelector("h1");
			pop.querySelector("h1").innerText = title.innerText;
			pop.querySelector("img").setAttribute("src", img.currentSrc)
			fetchProduct().then(data => {
				data.forEach(d => {
					if (d.name == title.textContent) {
						pop.querySelector("p").textContent = d.description;
						return 0;
					}
				})
			});
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
}

activatePopUp();


//intersection
const mainSection = document.getElementById("main-section");
const introSection = document.getElementById("p-main");
const introCards = document.querySelectorAll(".p1");
const form = document.getElementById("formSection");

const option = {
	threshold: 0.2
};
const option2 = {
	threshold: 0.3
}
function slideUpIntersection(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.top = "4.5rem";
			entry.target.style.opacity = "1";
			observer.unobserve(mainSection);
		}
	})
}

function slideSidesIntersection(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.left = "0";
			entry.target.style.opacity = "1";
		}
	})
}


let slideUp = new IntersectionObserver(slideUpIntersection, option);
let slideLeft = new IntersectionObserver(slideSidesIntersection, option2);
slideUp.observe(mainSection);
slideUp.observe(introSection);
slideUp.observe(form)

introCards.forEach( e => (slideLeft.observe(e)) );


//fetching json for products


