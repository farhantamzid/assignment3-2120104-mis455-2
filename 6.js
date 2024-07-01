var lowerLimit = parseInt(prompt("Enter lower limit: "));
var upperLimit = parseInt(prompt("Enter upper limit: "));

function averageEven(x, y) {
  var sum = 0;
  var count = 0;
  for (i = x; i <= y; i++) {
    if (i % 2 == 0) {
      sum += i;
      count++;
    }
  }
  return sum / count;
}

function averageOdd(x, y) {
  var sum = 0;
  var count = 0;
  for (i = x; i <= y; i++) {
    if (i % 2 != 0) {
      sum += i;
      count++;
    }
  }
  return sum / count;
}

console.log("Average of even numbers: ", averageEven(lowerLimit, upperLimit));
console.log("Average of odd numbers: ", averageOdd(lowerLimit, upperLimit));
