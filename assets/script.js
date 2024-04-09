const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let sizeSlide = slides.length;
let arraySlide = sizeSlide - 1;
const buttons = document.querySelectorAll(".arrow");
let slide = document.querySelector(".banner-img");
let src = slide.getAttribute("src");
let alt = slide.getAttribute("alt");
let slideActive = 0;
const breakpoint = document.querySelectorAll(".dot");
const dots = [...breakpoint];


buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const calcNextSlide = e.target.id === "next" ? 1 : -1;
		slideActive = slideActive + calcNextSlide;
		let pastSlide = slideActive - 1;
		let nextSlide = slideActive + 1;
		if (slideActive < 0) {
			slideActive = arraySlide;
		};
		if (slideActive > arraySlide) {
			slideActive = 0;
		};
		let imageActive = slides[slideActive].image;
		alt = slides[slideActive].tagLine;
		src = "./assets/images/slideshow/" + imageActive;
		slide.src = src;
		slide.alt = alt;
		if (e.target.id === "next") {
			dots[pastSlide].classList.remove("dot_selected");
			dots[slideActive].classList.add("dot_selected");
		}
		else 
		{
			dots[nextSlide].classList.remove("dot_selected");
			dots[slideActive].classList.add("dot_selected");
		};
	});
});
