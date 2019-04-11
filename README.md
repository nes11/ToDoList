# ToDoList

I first wrote tests (Mocha and Axios) then coded two implementations that passed the tests (as a function and as a class). This app includes HTML eventListeners for a simple dynamic UI. I used Browserify to bundle the app for use in the browser.  

Lots of stuff to do? Use this to list your tasks and keep track of the ones you've completed.

## Installation
Copy this repo and simply open `index.html` in your favourite browser.

## Development
Make changes to the code, then run this command to bundle the code for use in the browser. 
```javascript
browserify -e index.js -o bundle.js
```
## Tests
To run the tests:
```javascript
npm test
```