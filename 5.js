var lowerLimit = parseInt(prompt("Enter lower limit year: "));
var upperLimit = parseInt(prompt("Enter upper limit year: "));

var totalLeapYears = 0;
for (i = lowerLimit; i <= upperLimit; i++) {
  if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
    totalLeapYears = totalLeapYears + 1;
  }
}

console.log("Total number of leap years in your given range: ", totalLeapYears);
