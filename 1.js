let myArray = [0, null, undefined, 'какой-то текст', NaN, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrSortElements(myArray);

function arrSortElements(arr) {
  let zeroNumbers = 0;
  let evenNumbers = 0;
  let oddNumbers = 0;
  
  arr.forEach(function(item) {
    if (typeof item != 'number' || isNaN(item)) {
      return;
    } else if (item == 0) {
      zeroNumbers++;
    } else if (item % 2) {
      oddNumbers++;
    } else {
      evenNumbers++;
    }
  });
  
  console.log(`Нулей: ${zeroNumbers}, чётных: ${evenNumbers}, нечётных: ${oddNumbers}`);
}