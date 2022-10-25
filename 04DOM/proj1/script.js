var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

console.log(counter);
console.log(followers);

var count = 0;

// setInterval function has 2 Parameters. one function and one time (in milliseconds). setInterval() repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count
    }
}, 1); 


// setTimeout function has 2 Parameters. one function and one time (in milliseconds). The function passed in setTimeout start executing AFTER the amount of timeperiod (in milliseconds) passed is over.
setTimeout(() => {
    followers.innerText = "Hurray Followers count Reached"
},4800);