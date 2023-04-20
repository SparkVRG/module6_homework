console.log(getSum(2)(3));

function getSum(a) {
  return function(b) {
    return a + b;
  }
}