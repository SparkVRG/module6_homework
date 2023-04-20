/* Использование функции в цикле для вывода всех простых чисел в диапазоне */
for (let i = 0; i <= 1000; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

function isPrime(number) {
  if (number < 2) {
    return false;
  } else if (number > 1000) {
    console.log('Данные неверны');
    return;
  }
  
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  
  return true;
}