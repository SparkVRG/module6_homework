getNumbersInRange(5, 15);

function getNumbersInRange(a, b) {
  let currentNumber = a;
  
  let timerId = setInterval(function() {
    console.log(currentNumber);
    
    if (currentNumber == b) {
      clearInterval(timerId);
    }
    
    currentNumber += 1;
  }, 1000, a, b);
}