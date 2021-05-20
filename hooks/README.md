# Getting Started with Create React App

Replace this project with your react project having `node_modules` version ^17.0.2

# This project includes various small projects mentioned below:
1. A counter section to increment and reset counter.
2. Get current time on button click.
3. Digital clock that refresh every second.
4. A fun slide show where various style and text element added/change on click of a button.

# Points to remember
* Using useEffect Hook life cycle function for using setInterval, so interval is correctly cleared and no longer triggers every second after the component unmounts from the DOM.
* If same useState Hook method is used for each component, this will unintentionally call every component each time whenever any event occurs on any component. (To see the output open console and play with component buttons)
* To stop above effect I have used a seperate useState Hook on CurrentTime component. This coding style can be used for all components created.