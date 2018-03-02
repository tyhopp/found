/* A circle-inspired screen transition. */

/* Create DOM references */
const body = document.querySelector('body');
const mainContainer = document.getElementsByClassName('container');
const circleSVG = document.getElementById('landing-button-svg');
const circle = document.getElementById('landing-button-circle');

circle.addEventListener('click', function() {

	/* Get available screen dimensions */
	const screenWidth = window.screen.availWidth
	const screenHeight = window.screen.availHeight

	/* Move SVG to root DOM position */
	body.insertBefore(circleSVG, mainContainer[0]);

	/* Set viewBox, width & height of circle SVG to screen size */
	circleSVG.setAttribute('position', 'absolute');
	circleSVG.setAttribute('z-index', 3);
	circleSVG.setAttribute('top', 0);
	circleSVG.setAttribute('left', 0);
	circleSVG.setAttribute('viewbox', `0 0 ${screenWidth} ${screenHeight}`);
	circleSVG.setAttribute('width', `${screenWidth}`);
	circleSVG.setAttribute('height', `${screenHeight}`);
	circle.setAttribute('r', (`${screenWidth}`/2));

	/* GSAP animation */
	/*
	TweenMax.to(circle, 1, {

	})
	*/
});