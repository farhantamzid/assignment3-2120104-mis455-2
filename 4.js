var lowerLimit = parseInt(prompt("Enter lower limit:"));
var upperLimit = parseInt(prompt("Enter Upper Limit:"));

var sum = 0;

for (i = lowerLimit; i <= upperLimit; i++) {
  sum = sum + i;
}

console.log("The total sum is: ", sum);
