var age = prompt("What is your age?");
var leapYearsAdjustment = age/4 
var daysAlive = (age * 365) + leapYearsAdjustment;

console.log(leapYearsAdjustment);
console.log (daysAlive);
alert("You've been alive for approximately: " + daysAlive + " days!");