let isNaturalNumber = x => {
  if (x < 1 || typeof x != 'number' || isNaN(x)) {
    return false;
  }
  
  return true;
}

let pow = (x, n) => {
  if (!isNaturalNumber(x) || !isNaturalNumber(n)) {
    console.log('Данные неверны');
    return;
  }
  
  let result = x;
  
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  
  return result;
}

console.log(pow(5, 5));