const images = [
	{ title: "Peabody Sleeping", url: "webdev3Img/PeabodySleeping.jpg" },
	{ title: "Peabody Begging", url: "webdev3Img/PeabodyBegging.jpg" },
	{ title: "Peabody With Big Eyes", url: "webdev3Img/peabodyBigEyes.jpg" },
	{ title: "Peabody in Black and White", url: "webdev3Img/peabodyBlackAndWhite.jpg" },
	{ title: "Peabody in the Park", url: "webdev3Img/peabodyInThePark.jpg" },
	{ title: "Peabody in the Sky", url: "webdev3Img/peabodyInTheSky.jpg" },
	{ title: "Peabody on the Couch", url: "webdev3Img/peabodyOnCouch.jpg" },
	{ title: "Peabody Outside", url: "webdev3Img/peabodyOutside.jpg" },
	{ title: "Peabody Glamour Shot", url: "webdev3Img/peabodyPhotoshop.PNG" },
	{ title: "Peabody Giving Side Eye", url: "webdev3Img/PeabodySideEye.jpg" },
	{ title: "Peabody Squished Against a Pillow", url: "webdev3Img/peabodySquishedPillow.jpg" },
	{ title: "Peabody Staring", url: "webdev3Img/peabodyStaring.jpg" },
	{ title: "Peabody With a Turkey", url: "webdev3Img/peabodyWithTurkey.jpg" }
];

const FLIP_SPEED = 750;
let flipTiming = {
	duration: FLIP_SPEED,
	iterations: 1
};

// flip down
let flipAnimationTop = [
	{ transform: "rotateX(0)" },
	{ transform: "rotateX(-90deg)" },
	{ transform: "rotateX(-90deg)" }
];
let flipAnimationBottom = [
	{ transform: "rotateX(90deg)" },
	{ transform: "rotateX(90deg)" },
	{ transform: "rotateX(0)" }
];

// flip up
let flipAnimationTopReverse = [
	{ transform: "rotateX(-90deg)" },
	{ transform: "rotateX(-90deg)" },
	{ transform: "rotateX(0)" }
];
let flipAnimationBottomReverse = [
	{ transform: "rotateX(0)" },
	{ transform: "rotateX(90deg)" },
	{ transform: "rotateX(90deg)" }
];

// selectors
const flipGallery = document.getElementById("flip-gallery");
const flipUnite = flipGallery.querySelectorAll(".unite");

let currentIndex = 0;

// flip that image!
function updateGallery(currentIndex, isReverse = false) {
	// define direction
	const topAnimation = isReverse ? flipAnimationTopReverse : flipAnimationTop;
	const bottomAnimation = isReverse
		? flipAnimationBottomReverse
		: flipAnimationBottom;

	// animate flipping
	flipGallery.querySelector(".overlay-top").animate(topAnimation, flipTiming);
	flipGallery
		.querySelector(".overlay-bottom")
		.animate(bottomAnimation, flipTiming);

	// hide title
	flipGallery.style.setProperty("--title-y", "-1rem");
	flipGallery.style.setProperty("--title-opacity", 0);
	flipGallery.setAttribute("data-title", "");

	// Update image
	flipUnite.forEach((el, idx) => {
		let delay;
		if (isReverse) {
			delay = idx === 1 || idx === 2 ? 0 : FLIP_SPEED - 200;
		} else {
			delay = idx === 1 || idx === 2 ? FLIP_SPEED - 200 : 0;
		}

		/*
		const delay = (isReverse && (idx !== 1 && idx !== 2)) || (!isReverse && (idx === 1 || idx === 2)) 
		? FLIP_SPEED - 200 
		: 0;
*/
		setTimeout(() => setActiveImage(el), delay);
	});

	// update and reveal new title
	//flipUnite[3].addEventListener("animationend", () => {
	setTimeout(() => setImageTitle(), FLIP_SPEED * 0.5); // approx delay on revealing title
}
// set active image
function setActiveImage(el) {
	el.style.backgroundImage = `url("${images[currentIndex].url}")`;
}
// set active image title and reveal
function setImageTitle() {
	flipGallery.setAttribute("data-title", images[currentIndex].title);
	flipGallery.style.setProperty("--title-y", "0");
	flipGallery.style.setProperty("--title-opacity", 1);
}

// update the image index and flip the galllery
function updateIndex(increment) {
	const newIndex = Number(increment);
	const isReverse = newIndex < 0;
	currentIndex = (currentIndex + newIndex + images.length) % images.length;
	updateGallery(currentIndex, isReverse);
}

// nav buttons
const galleryNavButtons = document
	.querySelectorAll("[data-gallery-nav]")
	.forEach((btn) => {
		btn.addEventListener("click", () => updateIndex(btn.dataset.galleryNav));
	});

// set up first image including title (no animation)
function defineFirstImg() {
	flipUnite.forEach((el, idx) => {
		setActiveImage(el);
		setImageTitle(el);
	});
}
defineFirstImg();