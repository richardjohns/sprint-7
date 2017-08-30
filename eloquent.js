// Reverse a string

function reverseString(str) {
  var strArray = str.split("");
  var strRev = strArray.reverse();
  str = strRev.join("");
  return str;
}

reverseString("hello");


// Factorialise a number

function factorialize(num) {
  var counter = num;
  var resultSum = 0;

  if (num === 0) {
  return resultSum = 1;
  } else {
  for(i = 1; i < counter; i++) {
  console.log(i);
  console.log(counter);
  resultSum = num *= i;
  console.log(resultSum);
  }

  return resultSum;
  }
}

console.log(factorialize(5));

// Palindrome checker

function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("eye");
