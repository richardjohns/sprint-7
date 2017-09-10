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

//FIND THE LONGEST WORD IN A STRING

function findLongestWord(str) {
  var strArray = str.split(' ');
    console.log(strArray);
  var lengthArr = [];
  for (i = 0; i < strArray.length; i++) {
  lengthArr.push(strArray[i].length);
    console.log(lengthArr);
  }
    function getMaxOfArray(lengthArray) {
      return Math.max.apply(null, lengthArray);
    }

    var maxVal = getMaxOfArray(lengthArr);
    return maxVal;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//TITLE CASE A SENTENCE

function titleCase(str) {
    var strArray = str.split(' ');
    console.log(strArray);
    var uppercaseArray = [];
        for (i = 0; i < strArray.length; i++) {
        uppercaseArray.push(strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1).toLowerCase());
        console.log(uppercaseArray);
        }
    var joinString = uppercaseArray.join(" ");
  return joinString;
}

titleCase("I'm a little tea pot");
