// A circle-inspired screen transition. 

// Create DOM references 
const body = document.querySelector('body');
const mainContainer = document.getElementsByClassName('container');
const contentContainer = document.getElementsByClassName('content-container');
const circleSVG = document.getElementById('landing-button-svg');
const circle = document.getElementById('landing-button-circle');
const circleText = document.getElementsByClassName('landing-button-text');

// Get available screen dimensions 
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

if (circle) {
	circle.addEventListener('click', function() {

		// Hide text in circle button
		TweenMax.to(circleText[0], 1, {attr: {
			opacity: 0,
		}});
		TweenMax.to(circleText[1], 1, {attr: {
			opacity: 0,
		}});

		// Fade out backround 
		TweenMax.to(mainContainer[0], 0.4, {
			opacity: 0,
		});
		TweenMax.to(mainContainer[0], 0.5, {
			scale: 0,
			x: event.pageY * -1,
			y: event.pageX * 0.001,
			display: 'none',
			ease: Power4.easeInOut,
		});

		// Set viewBox, width & height of circle SVG to screen size 
		circleSVG.setAttribute('position', 'absolute');
		circleSVG.setAttribute('z-index', 3);
		circleSVG.setAttribute('top', 0);
		circleSVG.setAttribute('left', 0);

		// Move SVG to root DOM position 
		body.insertBefore(circleSVG, mainContainer[0]);

		// Reset parent SVG canvas
		TweenMax.to(circleSVG, 0.1, {attr: {
			viewBox: `0 0 ${screenWidth} ${screenHeight}`,
			width: `${screenWidth}`,
			height: `${screenHeight}`,
		}}).delay(0.3);

		// Reset circle coordinates in SVG canvas
	  circle.setAttribute('cx', event.pageX);
	  circle.setAttribute('cy', event.pageY);

		// Expand circle's radius to full screen
		TweenMax.to(circle, 1, {attr:{
			r: `${screenWidth}` * 1.2,
			ease: Power3.easeOut,
		}}).delay(0.5);
	});

	// Function to delay link redirects by 2 seconds.
	function delay (URL) {
		setTimeout( function() { window.location = URL }, 1500 );
	}
}
