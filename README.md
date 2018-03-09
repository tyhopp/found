# Found

An animated site concept for Found, a coworking space in Singapore. 

This project was setup with [Site Starter](https://github.com/tyhopp/site-starter). 

## Demo
![Demo for Found project](https://github.com/tyhopp/found/blob/master/found-cast.gif)

## Usage
- `git clone https://github.com/tyhopp/found`
- `cd found`
- Run local server (below). 

## Local Server
Run this project with a localhost setup of your choice. I recommend [MDN's approach using Python](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server). Here are the steps:
- Run `python -V` to find out what Python version you have. If you don't have Python, [download it here](https://www.python.org/downloads/).
- If you have Python version 2+, run `python -m SimpleHTTPServer`. 
- If you have Python version 3+, run `python -m http.server`.
- Open your browser and type `localhost:8000` in your address bar. You should be live!

## Notes
This site is a prototype and is not meant for production. Known issues:
- Animated page transition is achieved with custom Javscript and a `setTimeout` function to delay URL routing. For an approach better suited for production, see [Luigi De Rosa's PJAX method](https://www.smashingmagazine.com/2016/07/improving-user-flow-through-page-transitions/). 
- There is some jank on hover over right-hand image streams.