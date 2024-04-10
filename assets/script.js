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

const buttons = document.querySelectorAll(".arrow");
let slide = document.querySelector(".banner-img");

let slideActive = 0;
const dots = [...document.querySelectorAll(".dot")];

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        slideActive += (e.target.id === "next" ? 1 : -1);
        slideActive = (slideActive + slides.length) % slides.length;
        slide.src = `./assets/images/slideshow/${slides[slideActive].image}`;
        slide.alt = slides[slideActive].tagLine;
        dots.forEach(dot => dot.classList.remove("dot_selected"));
        dots[slideActive].classList.add("dot_selected");
    });
});